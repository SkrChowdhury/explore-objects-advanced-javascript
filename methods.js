const student = {
  name: 'Kodom Ali',
  money: 5000,
  study: 'Mathematics',
  subjects: ['Calculus', 'Algebra', 'Geometry'],
  exam: function(){
    console.log(this.name, 'is participating in as exam');
  }
};

student.exam();
