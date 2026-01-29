import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export const hobbies = ['Reading', 'Basketball', 'Coding', 'Photography']

const student = {
  firstName: 'Anna',
  surname: 'Rossi',
  birthday: '2003-05-17',
}

export default function StudentInfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Student Personal Info</Text>

      <View style={styles.row}>
        <Text style={styles.label}>First Name</Text>
        <Text style={styles.value}>{student.firstName}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Surname</Text>
        <Text style={styles.value}>{student.surname}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Birthday</Text>
        <Text style={styles.value}>{student.birthday}</Text>
      </View>

      <Text style={styles.subheader}>Hobbies</Text>
      <View style={styles.hobbyList}>
        {hobbies.map((h, i) => (
          <View key={i} style={styles.hobbyItem}>
            <Text style={styles.hobbyText}>{h}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f6f8fb',
    minHeight: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginTop: 20,
    marginBottom: 8,
  },
  row: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  value: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '600',
  },
  hobbyList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  hobbyItem: {
    backgroundColor: '#e6eef8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  hobbyText: {
    color: '#0b5cff',
    fontWeight: '600',
  },
})
