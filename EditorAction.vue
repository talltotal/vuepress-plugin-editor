<template>
  <div>
    <div
      v-if="isShow"
      :class="{[$style.fix]: isFix}"
    >
      <label
        v-for="act in action"
        :key="act[1]"
        :class="[$style.label]"
        :style="act[2]"
        :title="act[0]"
        @mousedown.prevent.stop="handle(act[1])"
        v-html="act[3] || ''"
      />
      <slot />
    </div>
  </div>
</template>

<script>
const elList = []
let activeComp = 0

export const handle = (type) => {
  const colors = {
    title: 'rgb(0, 32, 96)',
    title1: 'rgb(100, 132, 196)',
    success: 'rgb(0, 176, 80)',
    warning: 'rgb(227, 108, 9)',
    error: 'rgb(192, 0, 0)',
    op0: '#353535',
    op1: '#999',
    op2: '#ccc',
    op3: '#e8e8e8',
  }
  const actions = {
    bgMark: ['hiliteColor', 'yellow'],
    and: () => ['fontSize', +document.queryCommandValue('fontsize') + 1],
    sub: () => ['fontSize', +document.queryCommandValue('fontsize') - 1],
    delete: 'strikeThrough',
    clear: 'removeFormat',
    bold: 'bold',
    italic: 'italic',
    tab: ['insertText', '    '],
    tabBack: () => null,
    link: ['createLink', window.getSelection().toString()],
    unlink: 'unlink',
  }
  let action = actions[type] || ['foreColor', colors[type]]

  if (typeof action === 'function') {
    action = action()
  }

  if (!action) { return }

  if (action && typeof action === 'string') {
    action = [action]
  }

  const [commandId, value] = action
  document.execCommand(commandId, false, value)
}

export default {
  props: {
    contentEl: {
      default: null,
    },
  },
  data () {
    const editorIcon = this.$style.editorIcon
    return {
      isFix: false,
      isShow: false,
      action: [
        // [title, key, innerStyle, innerHTML]
        ['fontSize++', 'and', '', 'A<sup>+</sup>'],
        ['fontSize--', 'sub', '', 'A<sup>-</sup>'],
        ['color', 'title', 'background: rgb(0, 32, 96)'],
        ['color', 'title1', 'background: rgb(100, 132, 196)'],
        ['color', 'error', 'background: rgb(192, 0, 0)'],
        ['color', 'warning', 'background: rgb(227, 108, 9)'],
        ['color', 'success', 'background: rgb(0, 176, 80)'],
        ['color', 'op0', 'background: #353535'],
        ['color', 'op1', 'background: #999'],
        ['color', 'op2', 'background: #ccc'],
        ['color', 'op3', 'background: #e8e8e8'],
        ['strikeThrough', 'delete', 'text-decoration: line-through; width: auto', 'ABC'],
        ['backgroundColor', 'bgMark', 'background: yellow; border-radius: unset', 'a'],
        ['removeFormat', 'clear', 'border-radius: unset', `<svg class="${editorIcon}" aria-hidden="true"><use xlink:href="#icon-clear"></use></svg>`],
        ['link', 'link', 'transform: scale(1.1);', `<svg class="${editorIcon}" aria-hidden="true"><use xlink:href="#icon-link"></use></svg>`],
        ['unlink', 'unlink', '', `<svg class="${editorIcon}" aria-hidden="true"><use xlink:href="#icon-unlink"></use></svg>`],
      ],
    }
  },
  mounted () {
    /**
     * 在新页面mount之后，旧页面才开始destroy
     * 计数从 nextTick 开始
     */
    this.$nextTick(() => {
      elList.push(this.contentEl)
      activeComp += 1
      if (activeComp === 1) {
        this.isShow = true
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

          vm.isFix = scrollY > min && scrollY < max
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
  methods: {
    handle (...args) {
      handle(...args)
    },
  },
}
</script>

<style module lang="stylus">
.editorIcon
    width 1em
    height 1em
    display inline-block
    vertical-align middle
    position relative
    fill currentColor
    overflow hidden

.label
    display inline-flex
    vertical-align middle
    width 1em
    min-width 1em
    height 1em
    border-radius 50%
    cursor pointer
    align-items center
    justify-content center

    sup
        font-size .3em
        margin-top -7px

.label + .label
    margin-left 5px

.fix
  position fixed
  top 80px
  margin-left -3.2em
  display flex
  flex-direction column
  align-items center

  .label + .label
    margin-left 0
    margin-top 5px

</style>
