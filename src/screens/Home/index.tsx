import { useState } from 'react'
import {
  Alert,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import uuid from 'react-native-uuid'
import { LinearGradient } from 'expo-linear-gradient'
import { PlusCircle } from 'phosphor-react-native'

import logo from '../../../assets/logo.png'
import { THEME } from '../../theme'
import { styles } from './styles'

import { Statistic } from '../../components/Statistic'
import { Task } from '../../components/Task'
import { EmptyList } from '../../components/EmptyList'

interface Task {
  id: string
  description: string
  done: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const amountOfTasks = tasks.length
  const amountOfDoneTasks = tasks.filter((task) => task.done).length

  function handleAddTask() {
    if (!newTask) {
      Alert.alert('Atenção', 'Você precisa informar uma tarefa')
    }

    setTasks((prevValue) => [
      ...prevValue,
      {
        id: String(uuid.v4()),
        description: newTask,
        done: false,
      },
    ])

    setNewTask('')
  }

  function handleRemoveTask(id: string) {
    setTasks((prevValue) => prevValue.filter((task) => task.id !== id))
  }

  function handleToggleTaskDone(id: string) {
    setTasks((prevValue) =>
      prevValue.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={logo} alt="Todo List Logo" />
      </View>

      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nova tarefa"
            placeholderTextColor={THEME.COLORS.GRAY_300}
            value={newTask}
            onChangeText={setNewTask}
          />

          <TouchableOpacity
            disabled={!newTask}
            onPress={handleAddTask}
            style={newTask ? styles.addButton : styles.disabledAddButton}
          >
            <PlusCircle size={16} weight="bold" color={THEME.COLORS.GRAY_100} />
          </TouchableOpacity>
        </View>

        <View style={styles.summary}>
          <Statistic variant="created" counter={amountOfTasks} />
          <Statistic variant="done" counter={amountOfDoneTasks} />
        </View>

        {!!amountOfTasks && (
          <View style={styles.progressBar}>
            <LinearGradient
              colors={[THEME.COLORS.BLUE, THEME.COLORS.PURPLE_DARK]}
              start={[0, 0]}
              end={[1, 0]}
              style={{
                ...styles.progressBarThumb,
                width: `${(100 * amountOfDoneTasks) / amountOfTasks}%`,
              }}
            />
          </View>
        )}

        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Task
              {...item}
              onToggleDone={() => handleToggleTaskDone(item.id)}
              onRemove={() => handleRemoveTask(item.id)}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </>
  )
}
