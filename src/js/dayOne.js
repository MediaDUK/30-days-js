// The braces are mandatory with a named export, and it will fail if they aren’t used.
export default function dayOne() {
  window.addEventListener('keydown', function (e) {
    console.log(`Keydown: ${e.keyCode}`)
    // nums.forEach(v => {
    //   if (v % 5 === 0)
    //     fives.push(v)
    // })
  })
}