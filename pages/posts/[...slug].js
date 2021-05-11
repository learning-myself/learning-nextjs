import { useRouter } from "next/router";
import { useEffect } from "react";

function Test() {

  const router = useRouter();

  // useEffect(() => {
  //   router.push('/?new=123', undefined, { shallow: true })
  // }, )

  return (
    <div>This is test</div>
  )
}

export default Test;
