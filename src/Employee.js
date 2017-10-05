//Belajar buat kelas di javascript-ES6


class Employee{
    constructor(id,name,address){
        this.id=id
        this.name=name
        this.address = address
        console.log('emplyoee constructor dipanggil')
    }

    setId(id){
        this.id=id
    }
    setName(name){
        this.name=name
    }
    setAddress(address){
        this.address = address
    }

    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getAddress(){
        return this.address
    }


    myInfo(){
       console.log(`
Id : ${this.id}
Name : ${this.name}
Address : ${this.address}
       `)
    }
}


class BestEmplyoee extends Employee {
    constructor(id,name,address,salary){
        super(id,name,address);
        this.salary = salary
    }

    setSalary(salary){
        this.salary=salary
    }
    getSalary(){
        return this.salary
    }


    myInfo(){
       super.myInfo()
       console.log(`My Salary is : ${this.getSalary()}`)
    }
}

let arief = new Employee(2,"arief","Muara Enim")

arief.myInfo()

let putro = new Employee(3,"Putro","ME")

putro.setAddress("Muara Enim")
putro.myInfo()
console.log(putro.getAddress())

let zack = new BestEmplyoee(1,"Zack","California",2500000)
zack.myInfo()