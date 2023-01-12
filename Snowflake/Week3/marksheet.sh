#! /bin/bash
#write a shell script program
#to print student details and calculate total marks.
echo "Enter the name of student1 "
read stunum1
echo "Enter the marks of student1"
read marknum1
read marknum11
read marknum12
echo "Enter the name of student2 "
read stunum2
echo "Enter the marks of student2"
read marknum2
read marknum21
read marknum22
echo "Enter the name of student3 "
read stunum3
echo "Enter the marks of student3"
read marknum3
read marknum31
read marknum32

mark1=$((marknum1 +marknum11 + marknum12))
mark2=$((marknum2 +marknum21 + marknum22))
mark3=$((marknum3 +marknum31 + marknum32))

echo "The name of student is $stunum1 and the marks is $mark1"
echo "The name of student is $stunum2 and the marks is $mark2"
echo "The name of student is $stunum3 and the marks is $mark3"
