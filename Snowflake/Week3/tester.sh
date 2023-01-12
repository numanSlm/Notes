echo "Enter Number"
read num
s=0
#end=${num}
number=$((${#num} +1))
echo "$number"
for i in {1..$number}
do
s=$(($i\*10^($number-1)+$s)) 
echo "$s"
done
