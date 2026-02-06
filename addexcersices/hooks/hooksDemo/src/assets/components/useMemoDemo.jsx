import { useMemo } from "react";

function Sum() {
  const arr1=useMemo(()=>[1,2,3,4,5], []);
  const arr2=useMemo(()=>[1,2,3,4,6], []);

  const total1=useMemo(()=>{
    console.log("TÍNH arr1");
    return arr1.reduce((a, b)=>a+b, 0);
  }, [arr1]);

  const total2=useMemo(()=>{
    console.log("TÍNH arr2");
    return arr2.reduce((a, b)=>a+b, 0);
  }, [arr2]);

  return (
    <div>
      <div>Mảng số arr1: [{arr1.join(", ")}]</div>
      <div>Tổng arr1 (lần 1): {total1}</div>
      <div>Tổng arr1 (lần 2): {total1}</div>
      <br />
      <div>Mảng số arr2: [{arr2.join(", ")}]</div>
      <div>Tổng arr2: {total2}</div>
    </div>
  );
}

export default Sum;
