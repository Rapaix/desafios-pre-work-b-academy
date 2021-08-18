const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

// hobbies : john.hobbies.concat()

const jane = { ...john,
                hobbies : [...john.hobbies]
}

jane.name = 'Jane'
jane.hobbies.push('MuayThai', 'Programming')


console.log('John:', john)
console.log('Jane:', jane)
