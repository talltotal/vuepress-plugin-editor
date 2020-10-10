<template>
    <div>
        <div
            ref="content"
            :class="[$style.content, $style[type]]"
            @click.left.exact="openLink"
            @click.left.meta.exact="openLink"
        />
    </div>
</template>

<script>
export default {
    name: 'Editor',
    props: {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'light',
            validator (val) {
                return ['light', 'dark'].includes(val)
            },
        },
    },
    data () {
        return {
            contentEl: null,
        }
    },
    computed: {
        basePath () {
            return `${this.$site.base}editorData/${this.name}.htm`
        },
    },  
    created () {
        if (!this.name) {
            return new Error('name is required for EDITOR!')
        }
    },
    mounted () {
        this.getServer()
    },
    methods: {
        openLink ({ target }) {
            if (target && target.tagName === 'A' && target.href) {
                window.open(target.href, '_blank')
            }
        },
        getServer () {
            window.fetch(this.basePath).then(res => {
                if (res.headers.get('Cache-Control')) {
                    return res.text()
                } else {
                    return Promise.resolve('')
                }
            }).then(txt => {
                const el = this.$refs.content
                el.innerHTML = this.data = txt
                window.localStorage.setItem(`COMP_EDITOR_${this.name}`, txt)
            })
        }
    },
}
</script>

<style module lang="stylus">

.content
    margin-top 1em
    border 1px solid $borderColor
    border-radius 4px
    padding 0.8em 1em
    min-height 8em
    margin-bottom 1em

    &.light
        background #fff
        color #353535
    &.dark
        background #111
        color #e8e8e8

    a:hover
        cursor pointer

    a
        font-weight inherit
</style>
