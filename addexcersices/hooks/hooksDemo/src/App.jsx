import './App.css'
import Counter from './assets/components/useStateDemo.jsx'
import Users from './assets/components/useEffectDemo.jsx'
import FocusInput from './assets/components/useRefDemo.jsx'
import Counter2 from './assets/components/useReducerDemo.jsx'
import Sum from './assets/components/useMemoDemo.jsx'
import HelloButton from './assets/components/useCallbackDemo.jsx'
import React from 'react'

function App() {
  return (
    <>
      <Counter />
      <Users />
      <FocusInput />
      <Counter2 />
      <h2>Demo useMemo tính tổng mảng số</h2>
      <Sum />
      <p>UseMemo giúp tính tổng mảng số mà không làm re-render lại component khi không có sự thay đổi trong mảng, khi mảng thay đổi thì component sẽ re-render lại.</p>
      <HelloButton />
    </>
  )
}
export default App
