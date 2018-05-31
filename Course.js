'use strict';

function Course() { }

Course.create = function (name, code, description) {
    var course = new Course();

    course.name = name;
    course.code = code;
    course.description = description;

    course.students = [];
    course.times = [];

    return course;
}


var _p = Course.prototype;

_p.registerStudent = function (student) {
    this.students.push(student);
}

_p.unregisterStudent = function (studentId) {
    var me = this;

    if (!this.students.some(function (student, i) {
        if (student.id === studentId) {
            me.students.splice(i, 1);
            return true;
        }
    })) {
        throw new Error("Student " + studentId + " not registered for this course");
    }
};

_p.addTimes = function (days, times) {

    var me = this;

    if (!Array.isArray(days)) days = [days];
    if (!Array.isArray(times)) times = [times];

    days.forEach(function (day) {
        times.forEach(function (time) {
            me.times.push({
                day: day, time: time
            })
        });
    });
};

_p.showSchedule = function () {
    return this.times.map(function (time) {
        return time.day + " at " + time.time;
    }).join("\n");
}

_p.showStudents = function () {
    return this.students.map(function (student) {
        return student.toString();
    }).join("\n");
}

module.exports = Course;