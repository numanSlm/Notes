#! /bin/bash
# greatest of 3

echo "Enter the 3 numbers:"
read n1
read n2
read n3

if (($n1>=$n2 & $n1>=$n3 ))
then 
echo $n1 "is the greatest"
elif (($n2>=$n3))
then
echo $n2 "is the Greatest"
else
echo $n3" is the Greatest"
fi
