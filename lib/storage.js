export const STORAGE_KEYS = {
  QUIZ_SESSION: 'rightsteps_quiz_session',
  QUIZ_RESULTS: 'rightsteps_quiz_results',
  STUDENT_DATA: 'rightsteps_student_data'
}

export const saveToStorage = (key, data) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error('Failed to save to localStorage:', error)
    }
  }
}

export const getFromStorage = (key) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const data = localStorage.getItem(key)
      return data ? JSON.parse(data) : null
    } catch (error) {
      console.error('Failed to get from localStorage:', error)
      return null
    }
  }
  return null
}

export const removeFromStorage = (key) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Failed to remove from localStorage:', error)
    }
  }
}

export const saveQuizSession = (session) => {
  saveToStorage(STORAGE_KEYS.QUIZ_SESSION, session)
}

export const getQuizSession = () => {
  return getFromStorage(STORAGE_KEYS.QUIZ_SESSION)
}

export const saveQuizResult = (result) => {
  const existingResults = getFromStorage(STORAGE_KEYS.QUIZ_RESULTS) || []
  existingResults.push(result)
  saveToStorage(STORAGE_KEYS.QUIZ_RESULTS, existingResults)
}

export const getQuizResults = () => {
  return getFromStorage(STORAGE_KEYS.QUIZ_RESULTS) || []
}

export const saveStudentData = (studentData) => {
  saveToStorage(STORAGE_KEYS.STUDENT_DATA, studentData)
}

export const getStudentData = () => {
  return getFromStorage(STORAGE_KEYS.STUDENT_DATA)
}

export const clearAllData = () => {
  removeFromStorage(STORAGE_KEYS.QUIZ_SESSION)
  removeFromStorage(STORAGE_KEYS.QUIZ_RESULTS)
  removeFromStorage(STORAGE_KEYS.STUDENT_DATA)
}