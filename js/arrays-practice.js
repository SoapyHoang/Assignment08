//STEP 1
// let favoriteMovies = ['Your Silent Voice', 'Grave of the Fireflies', 'Moana', 'Everything, Everywhere, all at Once', 'Spider-man: No Way Home']
// console.log(favoriteMovies[1]) // Print out second movie in array

//STEP 2
// let movies = new Array(5)
// movies[0] = 'Spider-man: No Way Home'
// movies[1] = 'In the Heights'
// movies[2] = 'Coda'
// movies[3] = 'The Power of the Dog'
// movies[4] = 'Batman'
// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = 'Spider-man: No Way Home'
// movies[1] = 'In the Heights'
// movies[2] = 'Coda'
// movies[3] = 'The Power of the Dog'
// movies[4] = 'Batman'
// movies.splice(2, 0, 'Moonshot') // Adding new movie to 3rd position
// console.log(movies.length)

//STEP 4
// let movies = []
// movies[0] = 'Your Silent Voice'
// movies[1] = 'Grave of the Fireflies'
// movies[2] = 'Moana'
// movies[3] = 'Everything, Everywhere, all at Once'
// movies[4] = 'Spider-man: No Way Home'
// delete movies[0] // Remove the first movie in the array
// console.log(movies)

//STEP 5
// let movies = ['Your Silent Voice', 'Grave of the Fireflies', 'Moana', 
// 'Everything, Everywhere, all at Once', 'Spider-man: No Way Home',
// 'The Lost City', 'Morbius']
// for (let i in movies) {
//     console.log(movies[i])
// }

//STEP 6
// let movies = ['Your Silent Voice', 'Grave of the Fireflies', 'Moana', 
// 'Everything, Everywhere, all at Once', 'Spider-man: No Way Home',
// 'The Lost City', 'Morbius']
// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 7
// let movies = ['Your Silent Voice', 'Grave of the Fireflies', 'Moana', 
// 'Everything, Everywhere, all at Once', 'Spider-man: No Way Home',
// 'The Lost City', 'Morbius']
// for (let movie of movies.sort()) {
//     console.log(movie)
// }

//STEP 8
// let movies = ['Your Silent Voice', 'Grave of the Fireflies', 'Moana', 
// 'Everything, Everywhere, all at Once', 'Spider-man: No Way Home',
// 'The Lost City', 'Morbius']
// let leastFavMovies = ['Cats', 'Catwoman', 'Sonic the Hedgehog']
// let message = 'Movies I like:\n\n'
// for (let i = 0; i < 3; i++) {
//     message += movies[i] + '\n'
// }
// message += '...\n\nMovies I regret watching:\n\n'
// leastFavMovies.forEach((title) => {
//     message += title + '\n'
// })
// message += '...'

// console.log(message)

//STEP 9
// let movies = ['Your Silent Voice', 'Grave of the Fireflies', 'Moana', 
// 'Everything, Everywhere, all at Once', 'Spider-man: No Way Home',
// 'The Lost City', 'Morbius']
// let leastFavMovies = ['Cats', 'Catwoman', 'Sonic the Hedgehog']
// movies = movies.concat(leastFavMovies)
// console.log(movies.sort().reverse())

//STEP 10
// let movies = ['Your Silent Voice', 'Grave of the Fireflies', 'Moana', 
// 'Everything, Everywhere, all at Once', 'Spider-man: No Way Home',
// 'The Lost City', 'Morbius']
// let leastFavMovies = ['Cats', 'Catwoman', 'Sonic the Hedgehog']
// movies = movies.concat(leastFavMovies)
// console.log(movies.pop())

//STEP 11
// let movies = ['Your Silent Voice', 'Grave of the Fireflies', 'Moana', 
// 'Everything, Everywhere, all at Once', 'Spider-man: No Way Home',
// 'The Lost City', 'Morbius']
// let leastFavMovies = ['Cats', 'Catwoman', 'Sonic the Hedgehog']
// movies = movies.concat(leastFavMovies)
// console.log(movies.shift())

//STEP 12
// let movies = ['Your Silent Voice', 'Grave of the Fireflies', 'Moana', 
// 'Everything, Everywhere, all at Once', 'Spider-man: No Way Home',
// 'The Lost City', 'Morbius']
// let leastFavMovies = ['Cats', 'Catwoman', 'Sonic the Hedgehog']
// let moreFavMovies = ['La La Land', 'Shrek', 'Shrek 2']
// movies = movies.concat(leastFavMovies).sort()

// // Retrieve the least Favorable movies
// let leastFavIndicies = []
// leastFavMovies.forEach((movie) => {
//     leastFavIndicies.push(movies.indexOf(movie))
// })
// console.log(leastFavIndicies)

// // Replace least favorable movies with favorite movies
// for (let i of leastFavIndicies) {
//     movies[i] = moreFavMovies.pop()
// }
// console.log(movies)

//STEP 13
// let movies = [['Your Silent Voice', 1], ['Grave of the Fireflies', 2], ['Moana', 3], ['Everything, Everywhere, all at Once', 4], ['Spider-man: No Way Home', 5]]

// movies.forEach((movie) => {
//     name = movie.filter((item) => {
//         return typeof item === 'string'
//     })
//     console.log(name)
// })

//STEP 14
// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally']
// let showEmployee = (arr) => {
//     console.log('Employees:\n')
//     arr.forEach(name => {
//         console.log(name.toUpperCase())
//     });
// }
// showEmployee(employees)

//STEP 15
// function filterValues(arr) {
//     return arr.filter( (item) => {
//         return item
//     })
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16
// function randomItem(arr) {
//     return arr[Math.floor(Math.random() * arr.length)] // index is a random number from 0 to length - 1
// }
// console.log(randomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//STEP 17
// function largestNumber(arr) {
//     return Math.max(...arr) // Using the spread operator
// }
// console.log(largestNumber([1, 2000, 300, 40, 500, 6, 7, 8, 9, 10]))