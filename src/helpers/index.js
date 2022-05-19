import { IMAGES } from '../constants'

export const getCourseBackgroundImage = (id) => {
    if (!id) return null
  
    return IMAGES[id]
  }