import { useState, useMemo } from "react";

export default function MemoEx(){
  //useMemo is often used to cache expensive calculations. similar to useState, but only runs memory hogs when targeted states change.

  /* useEffect calls TWICE as many renders AND calculations. It renders with stale data based on expensive calc, 
  then reruns expensive calc to render correctly   */

  const [newTodo, setNewTodo] = useState('');

  const visibleTodos = useMemo(() => {
    // ✅ Does not re-run unless todos or filter change
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);
}