process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('How old are you ?')
process.stdin.on('data', (text) => {
    if  (text >= 100){
        console.log( 'nononononono');
    }else {
  console.log(2019 - text)
  process.exit()
}
})