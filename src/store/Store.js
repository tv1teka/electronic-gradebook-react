import {makeAutoObservable} from "mobx"

class Store {

    constructor() {
        makeAutoObservable(this)
    }

    Dates = ["07.02.2022","08.02.2022","09.02.2022","10.02.2022","11.02.2022"]

    Students = [
        {
            id:1,
            FIO: "Шаповалов Антон",
            Data: [
                {
                    date: "07.02.2022",
                    grade:3
                },
                {
                    date: "08.02.2022",
                    grade:4
                },
                {
                    date: "09.02.2022",
                    grade:5
                },
                {
                    date: "10.02.2022",
                    grade:5
                },
                {
                    date: "11.02.2022",
                    grade:5
                }
            ]
        },

        {
            id:2,
            FIO: "Суворов Вадим",
            Data: [
                {
                    date: "07.02.2022",
                    grade:4
                },
                {
                    date: "08.02.2022",
                    grade:3
                },
                {
                    date: "09.02.2022",
                    grade:5
                },
                {
                    date: "10.02.2022",
                    grade:4
                },
                {
                    date: "11.02.2022",
                    grade:5
                }
            ]
        },

        {
            id:3,
            FIO: "Топчи Усеин",
            Data: [
                {
                    date: "07.02.2022",
                    grade:4
                },
                {
                    date: "08.02.2022",
                    grade:3
                },
                {
                    date: "09.02.2022",
                    grade:4
                },
                {
                    date: "10.02.2022",
                    grade:4
                },
                {
                    date: "11.02.2022",
                    grade:4
                }
            ]
        },

        {
            id:4,
            FIO: "Соляник Виктор",
            Data: [
                {
                    date: "07.02.2022",
                    grade:4
                },
                {
                    date: "08.02.2022",
                    grade:3
                },
                {
                    date: "09.02.2022",
                    grade:2
                },
                {
                    date: "10.02.2022",
                    grade:4
                },
                {
                    date: "11.02.2022",
                    grade:5
                }
            ]
        }
    ]

    day = {
        date: null,
        grade: "",
        FIO: null
    }

    setDay = (day, name) => {
        this.day.date = day.date;
        this.day.grade = day.grade;
        this.day.FIO = name;
    }

    setGrade(value) {
        this.day.grade = value;
    }

    changeGrade() {

        // this.Students.forEach(student => {
        //     if(student => student.FIO == this.day.FIO) {
        //         console.log("Студент тот");
        //         student.Data.forEach(day => {
        //             if(day => day.date == this.day.date) {
        //                 day.grade = this.day.grade;
        //                 console.log("done");
        //             }
        //         })
        //     }
        // });

        for (let index = 0; index < this.Students.length; index++) {
            if(this.Students[index].FIO === this.day.FIO) {
                for(let j = 0; j < this.Students[index].Data.length; j++) {
                    if(this.Students[index].Data[j].date === this.day.date) {
                        this.Students[index].Data[j].grade = this.day.grade
                    }
                }
            } 
        }
    }
    
    

}

export default new Store()