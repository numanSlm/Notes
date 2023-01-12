echo "Enter the Number"
read num
 
temp=$num
s=0
n=0
r=0
while [ $temp -gt 0 ]
do
r=`expr $temp % 10|bc`
n=`expr $r \* $r \* $r|bc`
s=`expr $n + $s|bc`
temp=`expr $temp / 10|bc`
done
 
if [ $s -eq $num ]
then
echo "Armstrong"
else
echo "Not Armstrong"
fi
