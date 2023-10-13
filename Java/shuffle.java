import java.util.*;
import java.util.Collections;
public class shuffle
{ 
    public static void main(String[] args) {
       
        ArrayList<Integer> nums = new ArrayList<>();
        for(int i=1;i<8;i++)
        { 
            nums.add(i);
        }
        Collections.shuffle(nums);
        System.out.println(nums);
        
    }
}