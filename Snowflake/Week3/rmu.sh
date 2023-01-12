#!/bin/bash
echo "Enter Number of Students"
read num
end=${num}

#read and store in an array
for ((i=1;i<=end ;i++))
do
   read var # local loop variable
   VAR[${i}]=$var
#VAR is the arr and var is the current ele i in loop
done

# to display the array
echo "The Names of the students are:"
j=1
while [ ${j} -le ${num} ]
do
   echo ${VAR[${j}]}
   (( j += 1 ))
done
