function getGradeAlt(points) {
    if (points > 90) return 'A';
    if (points > 80) return 'B';
    if (points > 70) return 'C';
    if (points > 60) return 'D';
    if (points > 50) return 'E';
    return 'F';
}

function getGrade(points) {
    let mark;
    if (points > 90) {
        mark = 'A';
    } else if (points > 80) {
        mark = 'B';
    } else if (points > 70) {
        mark = 'C';
    } else if (points > 60) {
        mark = 'D';
    } else if (points > 50) {
        mark = 'E';
    } else {
        mark = 'F';
    }
    return mark;
}