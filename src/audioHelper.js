export const playSound = id => {
  const audio = document.getElementById(id)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
}
export const stopSound = id => {
  const audio = document.getElementById(id)
  if (!audio) return
  audio.currentTime = 0
  audio.pause()
}
