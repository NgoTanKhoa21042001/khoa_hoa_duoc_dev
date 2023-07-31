import React, { memo, useRef } from 'react'
import styles from './title.module.scss'
type TitleProp = {
  address: any
  handleClick: (value: any) => void
}
function Title(props: TitleProp) {
  // console.log(props)

  const h1Ref = useRef<HTMLDivElement>(null)

  const h1Click = () => {
    if (h1Ref.current) {
      h1Ref.current.style.color = 'pink'
    }
  }
  return (
    <div>
      <div className={styles.title} ref={h1Ref} onClick={h1Click}>
        To do list typescript
      </div>
    </div>
  )
}

export default memo(Title)
