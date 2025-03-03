"use client";
import { useRouter } from "next/navigation";

export default function Orders() {
    const router = useRouter();

    const orderPlaceHandler = () => {
        console.log("Placing your order");
        router.push("/");
    }

  return (
    <div>
      <div >
        ORDERS PAGE

        <button onClick={orderPlaceHandler} >Place order</button>
      </div>
    </div>
  );
}
