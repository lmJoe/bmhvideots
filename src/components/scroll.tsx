import React, { useEffect, useRef } from "react";

namespace ScrollSpace {
  export type Props = {
    children?: React.ReactNode
    height?: string //高度,默认100%
    load?: (data?: IntersectionObserverEntry) => void //执行函数
    isFirstLoad?: boolean //首次进入是否执行,默认true
  }
}

/* 滑动加载组件 */
export const Scroll: React.FC<ScrollSpace.Props> = (props) => {
  const loadingRef = useRef<HTMLSpanElement>(null)
  props = Object.assign({ load: () => { }, height: "100%", isFirstLoad: false }, props)

  useEffect(() => {
    let isFirst = props.isFirstLoad
    let ob = new IntersectionObserver(([entries]:IntersectionObserverEntry[]) => {
      if (entries.isIntersecting && isFirst) {
        props.load!(entries)
      }
      isFirst = true
    }, { threshold: 1 })
    ob.observe(loadingRef.current as HTMLSpanElement)
  }, [])

  return <div style={{ height: props.height }}>
    {props.children}
    <span ref={loadingRef}>loading...</span>
  </div>
}
