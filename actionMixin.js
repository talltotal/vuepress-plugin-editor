const elList = []
let activeComp = 0

export default {
    mounted () {
        /**
         * 在新页面mount之后，旧页面才开始destroy
         * 计数从 nextTick 开始
         */
        this.$nextTick(() => {
          elList.push(this.contentEl)
          activeComp += 1
          if (activeComp === 1) {
            this.isShowAction = true
          }
    
          if (!window.__EDITOR) {
            const vm = this
            window.__EDITOR = () => {
              const { scrollY } = window
              const firstEl = elList[0]
              const lastEl = elList[elList.length - 1]
    
              if (!firstEl) return
              if (!lastEl) return
    
              const min = firstEl.offsetTop - 100
              const max = lastEl.offsetTop + lastEl.clientHeight - 100
    
              vm.isFixAction = scrollY > min && scrollY < max
            }
            /** 对一开始的页面位置进行判断 */
            window.__EDITOR()
            window.addEventListener('scroll', window.__EDITOR)
          }
        })
    },
    beforeDestroy () {
        activeComp -= 1
        this.$nextTick(() => {
          elList.pop()
          if (activeComp === 0) {
            window.__EDITOR = null
            window.removeEventListener('scroll', window.__EDITOR)
          }
        })
    },
}