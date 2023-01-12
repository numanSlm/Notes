echo "Enter the value of a"

read a

echo "Enter the value of b"

read b

c=`echo $a + $b|bc`

echo "sum : "$c

c=`echo $a - $b|bc`

echo "diff : "$c

c=`echo $a \* $b|bc`

echo "mul : "$c

c=`echo $a % $b|bc`

echo "modulus : "$c
