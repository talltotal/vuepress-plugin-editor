<template>
    <div>
        <svg
            v-if="!hideControls"
            aria-hidden="true"
            style="position: absolute; width: 0px; height: 0px; overflow: hidden;"
        >
            <!-- eslint-disable -->
            <symbol id="icon-link" viewBox="0 0 1024 1024"><path d="M405.096875 653.5390625l243.6328125-243.646875-49.5984375-49.5984375-243.6046875 243.646875 49.5703125 49.5984375z m73.265625-10.4625c9.6328125 27.05625 3.8671875 58.415625-17.803125 80.015625-47.2640625 47.165625-62.578125 70.65-102.825 70.65-39.9375 0-51.3703125-19.321875-119.840625-87.6234375a76.78125 76.78125 0 0 1 0.0140625-108.61875c42.9046875-42.8203125 72.4078125-86.4140625 129.290625-65.75625l52.1015625-51.9609375c-56.8125-35.94375-133.03125-29.2921875-182.4890625 20.08125L188.4640625 548.140625c-57.3046875 57.1640625-57.31875 150.1875-0.028125 207.365625 63.95625 63.8015625 94.921875 108.05625 169.2984375 108.05625 71.859375 0 102.99375-41.878125 152.26875-91.06875 49.0640625-48.8953125 56.3484375-124.453125 20.53125-181.4625l-52.171875 52.059375z m341.4375-388.63125l-65.25-65.25c-57.234375-57.2765625-150.328125-57.0234375-207.2953125-0.0140625l-48.2484375 48.2484375c-49.21875 49.2046875-56.19375 125.184375-20.0953125 182.0953125l51.9609375-51.975c-10.9828125-30.1640625-2.4609375-60.7921875 17.4796875-80.746875 48.6-48.5859375 62.83125-70.6078125 102.5578125-70.6078125 39.88125 0 51.3140625 19.378125 119.5453125 87.6234375a76.9078125 76.9078125 0 0 1 0.0140625 108.6046875c-42.69375 42.6796875-71.746875 85.7953125-128.2078125 65.9671875l-52.1015625 52.115625a145.8703125 145.8703125 0 0 0 77.765625 22.33125c71.55 0 102.459375-41.6109375 151.8890625-91.040625 57.178125-57.178125 57.15-150.1875 0-207.3515625z" fill="#e04343"></path></symbol>
            <symbol id="icon-unlink" viewBox="0 0 1024 1024"><path d="M480.359375 635.92578125c9.22851563 25.04882813 3.95507813 54.05273438-17.13867188 75.14648438L419.71484375 755.89648438c-13.18359375 13.18359375-31.640625 21.09375-50.09765625 21.09374999-19.77539063 0-36.9140625-7.91015625-50.09765625-21.09375l-60.64453125-60.64453125c-27.68554688-27.68554688-27.68554688-73.828125 0-101.51367187l44.82421875-44.82421875c13.18359375-13.18359375 31.640625-21.09375 50.09765625-21.09375 9.22851563 0 17.13867188 1.31835938 25.04882813 3.95507813l48.77929687-48.77929688c-21.09375-13.18359375-46.14257813-21.09375-72.50976563-21.09375-36.9140625 0-71.19140625 14.50195313-96.24023437 39.55078125l-44.82421875 44.82421875c-52.734375 54.05273438-52.734375 141.06445313 0 193.79882813l60.64453125 60.64453124c25.04882813 26.3671875 59.32617188 39.55078125 96.24023438 39.55078125s71.19140625-14.50195313 96.24023437-39.55078125l44.82421875-44.82421875c26.3671875-26.3671875 39.55078125-60.64453125 39.55078125-97.55859374 0-26.3671875-7.91015625-51.41601563-21.09375-72.50976563l-50.09765625 50.09765625z m-63.28125-263.671875l-121.2890625-121.2890625-47.4609375 46.14257813 121.2890625 121.28906249 47.4609375-46.14257812z m383.64257813-101.51367188l-60.64453126-60.64453124c-26.3671875-26.3671875-60.64453125-39.55078125-96.24023437-39.55078125-36.9140625 0-71.19140625 14.50195313-96.24023438 39.55078125l-44.82421874 44.82421875c-26.3671875 26.3671875-39.55078125 60.64453125-39.55078125 97.55859374 0 26.3671875 7.91015625 51.41601563 21.09375 73.828125l48.77929687-48.77929687c-2.63671875-7.91015625-3.95507813-15.8203125-3.95507813-25.04882813 0-19.77539063 7.91015625-36.9140625 21.09375001-51.41601562l44.82421874-44.82421875c13.18359375-13.18359375 31.640625-21.09375 50.09765625-21.09375s36.9140625 7.91015625 50.09765625 21.09375l60.64453125 60.64453125c27.68554688 27.68554688 27.68554688 73.828125 0 101.51367188L709.75390625 464.5390625c-13.18359375 13.18359375-31.640625 21.09375-50.09765625 21.09375-7.91015625 0-15.8203125-1.31835938-23.73046875-3.95507813l-48.77929688 48.77929688c21.09375 13.18359375 46.14257813 21.09375 72.50976563 21.09375 36.9140625 0 71.19140625-14.50195313 96.24023438-39.55078125l44.82421874-44.82421875c54.05273438-55.37109375 54.05273438-142.3828125 0-196.43554688z m-206.98242188 369.14062501l121.2890625 121.28906249 46.14257813-46.14257812-121.28906251-121.2890625-46.14257812 46.14257813z" fill="#565D64"></path></symbol>
            <symbol id="icon-clear" viewBox="0 0 1024 1024"><path d="M615.564215 406.570809"></path><path d="M885.03553 548.117592l-15.940041 0 0 243.09662c0 70.937632 15.940041 131.517359 15.940041 131.517359 0 17.530258-14.346753 31.882128-31.883151 31.882128L167.689698 954.6137c-17.532305 0-31.878035-14.351869-31.878035-31.882128 0 0 15.940041-58.190307 15.940041-128.32976L151.751704 548.117592l-15.940041 0c-17.537422 0-31.883151-14.349823-31.883151-31.888268L103.928512 356.824825c0-17.537422 14.34573-31.884175 31.883151-31.884175l270.995017 0L406.806681 149.58997c0-43.838438 35.867906-79.70532 79.707366-79.70532l47.822169 0c43.838438 0 79.704296 35.866882 79.704296 79.70532l0 175.349657 270.996041 0c17.537422 0 31.882128 14.346753 31.882128 31.884175l0 159.41064C916.917658 533.767769 902.572952 548.117592 885.03553 548.117592L885.03553 548.117592 885.03553 548.117592zM335.071893 922.726455 335.071893 711.508893c0-6.374174 5.583159-11.951193 11.95631-11.951193l7.966439 0c6.380314 0 11.961426 5.577019 11.961426 11.951193l0 211.217562 135.495974 0L502.452042 711.508893c0-6.374174 5.581112-11.951193 11.954263-11.951193l7.965415 0c6.385431 0 11.962449 5.577019 11.962449 11.951193l0 211.217562 127.526465 0L661.860634 711.508893c0-6.374174 5.577019-11.951193 11.951193-11.951193l7.972579 0c6.377244 0 11.955286 5.577019 11.955286 11.951193l0 211.217562 159.411663 0c0 0-15.939017-57.388035-15.939017-128.324644L837.212338 548.117592 183.633832 548.117592l0 246.284219c0 70.936609-15.945157 128.324644-15.945157 128.324644L335.071893 922.726455 335.071893 922.726455 335.071893 922.726455zM885.03553 372.761796c0-8.768711-7.17133-15.936971-15.940041-15.936971L582.156338 356.824825 582.156338 157.562549c0-31.085996-24.708751-55.793724-55.794747-55.793724l-31.878035 0c-31.084972 0-55.79884 24.707728-55.79884 55.793724l0 199.262276L151.750681 356.824825c-8.769734 0-15.940041 7.16826-15.940041 15.936971l0 127.528512c0 8.769734 7.170307 15.940041 15.940041 15.940041l31.883151 0 653.578506 0 31.882128 0c8.768711 0 15.940041-7.170307 15.940041-15.940041L885.034507 372.761796 885.03553 372.761796 885.03553 372.761796zM885.03553 372.761796"></path><path d="M885.03553 548.117592l-15.940041 0 0 243.09662c0 70.937632 15.940041 131.517359 15.940041 131.517359 0 17.530258-14.346753 31.882128-31.883151 31.882128L167.689698 954.6137c-17.532305 0-31.878035-14.351869-31.878035-31.882128 0 0 15.940041-58.190307 15.940041-128.32976L151.751704 548.117592l-15.940041 0c-17.537422 0-31.883151-14.349823-31.883151-31.888268L103.928512 356.824825c0-17.537422 14.34573-31.884175 31.883151-31.884175l270.995017 0L406.806681 149.58997c0-43.838438 35.867906-79.70532 79.707366-79.70532l47.822169 0c43.838438 0 79.704296 35.866882 79.704296 79.70532l0 175.349657 270.996041 0c17.537422 0 31.882128 14.346753 31.882128 31.884175l0 159.41064C916.917658 533.767769 902.572952 548.117592 885.03553 548.117592L885.03553 548.117592 885.03553 548.117592zM335.071893 912.493393 335.071893 711.508893c0-6.374174 5.583159-11.951193 11.95631-11.951193l7.966439 0c6.380314 0 11.961426 5.577019 11.961426 11.951193l0 200.984501 135.495974 0L502.452042 711.508893c0-6.374174 5.581112-11.951193 11.954263-11.951193l7.965415 0c6.385431 0 11.962449 5.577019 11.962449 11.951193l0 200.984501 127.526465 0L661.860634 711.508893c0-6.374174 5.577019-11.951193 11.951193-11.951193l7.972579 0c6.377244 0 11.955286 5.577019 11.955286 11.951193l0 200.984501 149.178601 0c0 0-15.939017-47.154973-15.939017-118.091582L826.979276 548.117592 193.866894 548.117592l0 246.284219c0 70.936609-15.945157 118.091582-15.945157 118.091582L335.071893 912.493393l0 10.233062L335.071893 912.493393zM874.802468 382.994857c0-8.768711-7.17133-15.936971-15.940041-15.936971L571.923276 367.057887 571.923276 157.562549c0-31.085996-24.708751-45.560662-55.794747-45.560662l-11.411911 0c-31.084972 0-55.79884 14.474666-55.79884 45.560662l0 209.495338L161.983743 367.057887c-8.769734 0-15.940041 7.16826-15.940041 15.936971l0 107.062388c0 8.769734 7.170307 15.940041 15.940041 15.940041l31.883151 0 633.112382 0 31.882128 0c8.768711 0 15.940041-7.170307 15.940041-15.940041L874.801445 382.994857l10.233062 0L874.802468 382.994857zM885.03553 372.761796"></path></symbol>
            <symbol id="icon-upload" viewBox="0 0 1024 1024"><path d="M633.341091 613.129258c-11.326976 11.328-29.694299 11.328-41.022299 0l-44.363394-45.106314 0 237.407038c0 16.020882-12.986779 29.007661-29.006637 29.007661l-8.867972 0c-16.020882 0-29.007661-12.985756-29.007661-29.007661L481.073128 564.181453l-48.14144 48.947805c-11.328 11.328-29.694299 11.328-41.022299 0l-6.27082-6.27082c-11.328-11.326976-11.329023-29.694299 0-41.022299L490.889705 458.82287c5.975085-5.976108 13.909801-8.79634 21.736047-8.466835 7.825222-0.328481 15.759939 2.491751 21.735024 8.466835l105.251136 107.013269c11.328 11.328 11.328 29.695323 0 41.022299L633.341091 613.129258z"></path><path d="M916.318 403.171386c-20.911262-24.651446-48.196699-44.821835-79.002308-55.130621-6.601348-74.843592-38.726-142.075833-88.228437-192.724373C693.638385 99.288331 616.835162 64.328098 533.007965 64.328098c-61.839417 0-119.489418 18.824741-167.898965 51.543933-44.008306 29.134551-80.095199 69.474304-104.071264 117.881804-52.156894 8.515954-99.245352 34.063817-133.572158 71.257927-39.607066 42.131563-63.371306 99.05604-63.371306 161.357991 0 64.992223 25.965371 124.155694 68.212568 166.737512l-0.652869 0c41.905412 42.911322 99.357915 69.322855 163.399487 69.466118l0-70.370721c-44.683688-0.14224-85.406159-18.486026-114.549919-48.400337-29.714765-30.029944-47.756677-71.267137-47.756677-117.433596 0-43.924395 17.162892-83.816964 44.447305-113.3987 27.28646-29.582759 65.360614-48.854685 107.380636-51.096748 13.202697-0.448208 25.313525-8.516977 30.80561-21.515013 18.482957-43.917232 49.288566-80.670298 87.803765-106.667392 36.738739-24.650423 81.627089-39.442314 129.823787-39.442314 65.131393 0 124.543527 26.89351 167.44257 70.370721 42.687218 43.924395 69.532633 103.978143 69.532633 170.763199 0 16.5837 11.44261 31.374568 28.164456 34.512025 26.406416 4.929266 49.28959 18.376533 66.013483 38.098713 15.402805 19.721157 25.312502 44.820811 25.312502 72.161506 0 31.374568-12.110829 58.716286-32.354895 79.334883-19.363 20.171412-46.647413 32.720216-76.784804 32.720216l-0.669242 0-11.195993 0 0 70.370721 11.195993 0 0.881067 0c48.847521-0.896416 93.085048-21.512966 125.422548-53.338812 32.125675-33.167401 52.369741-78.43642 52.369741-129.085984C958.339046 475.78417 942.056198 434.994162 916.318 403.171386z"></path><path d="M894.954437 928.496879c0 16.019859-12.986779 29.007661-29.007661 29.007661L156.013775 957.50454c-16.020882 0-29.007661-12.986779-29.007661-29.007661l0-6.943133c0-16.019859 12.986779-29.007661 29.007661-29.007661l709.934025 0c16.019859 0 29.007661 12.986779 29.007661 29.007661L894.95546 928.496879z"></path></symbol>
            <symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M633.341091 671.637814c-11.326976-11.328-29.694299-11.328-41.022299 0l-44.363394 45.106314 0-237.407038c0-16.020882-12.986779-29.007661-29.006637-29.007661l-8.867972 0c-16.020882 0-29.007661 12.985756-29.007661 29.007661l0 241.248529-48.14144-48.947805c-11.328-11.328-29.694299-11.328-41.022299 0l-6.27082 6.27082c-11.328 11.326976-11.329023 29.694299 0 41.022299L490.889705 825.944202c5.975085 5.976108 13.909801 8.79634 21.736047 8.466835 7.825222 0.328481 15.759939-2.491751 21.735024-8.466835l105.251136-107.013269c11.328-11.328 11.328-29.695323 0-41.022299L633.341091 671.637814z"></path><path d="M916.318 403.171386c-20.911262-24.651446-48.196699-44.821835-79.002308-55.130621-6.601348-74.843592-38.726-142.075833-88.228437-192.724373C693.638385 99.288331 616.835162 64.328098 533.007965 64.328098c-61.839417 0-119.489418 18.824741-167.898965 51.543933-44.008306 29.134551-80.095199 69.474304-104.071264 117.881804-52.156894 8.515954-99.245352 34.063817-133.572158 71.257927-39.607066 42.131563-63.371306 99.05604-63.371306 161.357991 0 64.992223 25.965371 124.155694 68.212568 166.737512l-0.652869 0c41.905412 42.911322 99.357915 69.322855 163.399487 69.466118l0-70.370721c-44.683688-0.14224-85.406159-18.486026-114.549919-48.400337-29.714765-30.029944-47.756677-71.267137-47.756677-117.433596 0-43.924395 17.162892-83.816964 44.447305-113.3987 27.28646-29.582759 65.360614-48.854685 107.380636-51.096748 13.202697-0.448208 25.313525-8.516977 30.80561-21.515013 18.482957-43.917232 49.288566-80.670298 87.803765-106.667392 36.738739-24.650423 81.627089-39.442314 129.823787-39.442314 65.131393 0 124.543527 26.89351 167.44257 70.370721 42.687218 43.924395 69.532633 103.978143 69.532633 170.763199 0 16.5837 11.44261 31.374568 28.164456 34.512025 26.406416 4.929266 49.28959 18.376533 66.013483 38.098713 15.402805 19.721157 25.312502 44.820811 25.312502 72.161506 0 31.374568-12.110829 58.716286-32.354895 79.334883-19.363 20.171412-46.647413 32.720216-76.784804 32.720216l-0.669242 0-11.195993 0 0 70.370721 11.195993 0 0.881067 0c48.847521-0.896416 93.085048-21.512966 125.422548-53.338812 32.125675-33.167401 52.369741-78.43642 52.369741-129.085984C958.339046 475.78417 942.056198 434.994162 916.318 403.171386z"></path><path d="M894.954437 928.496879c0 16.019859-12.986779 29.007661-29.007661 29.007661L156.013775 957.50454c-16.020882 0-29.007661-12.986779-29.007661-29.007661l0-6.943133c0-16.019859 12.986779-29.007661 29.007661-29.007661l709.934025 0c16.019859 0 29.007661 12.986779 29.007661 29.007661L894.95546 928.496879z"></path></symbol>
            <!-- eslint-enable -->
        </svg>
        <div
            v-if="!hideControls"
            :class="$style.demo"
        >
            <div>
                <EditorAction
                    v-show="isShowAction"
                    :is-fix="isFixAction"
                    :tes="1"
                />
            </div>
            <div>
                <slot name="btns" />
                <button @click="outLink">
                    <OutboundLink />
                </button>
                <button @click="saveServer"> 
                    <svg
                        :class="$style.icon"
                        aria-hidden="true"
                    >
                        <use :xlink:href="`#icon-upload`" />
                    </svg>
                </button>
                <button @click="getServer">
                    <svg
                        :class="$style.icon"
                        aria-hidden="true"
                    >
                        <use :xlink:href="`#icon-download`" />
                    </svg>
                </button>
            </div>
        </div>
        <div :class="{[$style.toast]: true, [$style.show]: showInfo}">
            <label>{{ infoTxt }}</label>
        </div>
        <!--
            编辑面板，快捷键：
            1. tab：4个空格
            2. command+-：字体缩小
            3. command++：字体放大
            4. command+s：保存提交
            5. command+b：加粗
            6. command+i：斜体
        -->
        <div
            ref="content"
            :class="{[$style.content]: true, [$style[type]]: true, [$style.contentM]: minArea > 1}"
            :contenteditable="minArea == 1"
            @blur="change"
            @keyup="change"
            @keydown.tab.exact.prevent="handle('tab')"
            @keydown.shift.tab.prevent="handle('tabBack')"
            @keydown.meta.187.prevent="handle('and')"
            @keydown.meta.189.prevent="handle('sub')"
            @keydown.meta.83.prevent="handleSave"
            @keydown.meta.66.prevent="handle('bold')"
            @keydown.meta.73.prevent="handle('italic')"
            @paste="change"
            @input="change"
            @click.left.exact="openLink"
            @click.left.meta.exact="openLink"
        />
    </div>
</template>

<script>
/**
 * 1. get name file data
 * 2. put name file data
 * [get keycode](https://keycode.info)
 * [execCommand](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand)
 * [vue events](https://cn.vuejs.org/v2/guide/events.html#按键码)
 */
import EditorAction, { handle } from './EditorAction'
import ActionMixin from './actionMixin'

export default {
    name: 'Editor',
    components: {
        EditorAction,
    },
    mixins: [ActionMixin],
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
        hideControls: {
            type: Boolean,
            default: false
        },
        minArea: {
            type: Number,
            default: 1
        }
    },
    data () {
        return {
            showInfo: false,
            infoTxt: '',
            contentEl: null,
            isFixAction: false,
            isShowAction: false
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
        const el = this.$refs.content
        this.contentEl = el
        this.disabled = false
        const pre = window.localStorage.getItem(`COMP_EDITOR_${this.name}`)
        if (pre) {
            el.innerHTML = pre
            this.checkArea()
        } else {
            this.getServer()
        }
    },
    beforeDestroy () {
        this.saveServer()
    },
    methods: {
        openLink ({ target }) {
            if (target && target.tagName === 'A' && target.href) {
                window.open(target.href, '_blank')
            }
        },
        outLink () {
            window.open(this.basePath)
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
                this.saveLocal()
            })
        },
        change () {
            clearTimeout(this.timeId)
            this.timeId = setTimeout(this.saveLocal, 1000)
        },
        handleSave () {
            this.saveLocal()
            this.saveServer()
        },
        handle (...args) {
            handle(...args)
        },
        saveServer () {
            if (!this.$refs.content) {
                return
            }
            const storageData = window.localStorage.getItem(`COMP_EDITOR_${this.name}`)
            const tempData = this.$refs.content.innerHTML
            const data = {
                name: this.name,
                data: storageData || tempData,
            }
            return window.fetch('/api/updateEditor', {
                body: JSON.stringify(data),
                headers: {
                    'Access-Control-Allow-Method': 'POST',
                    'content-type': 'application/json',
                },
                method: 'POST',
            }).then((res) => {
                if (res.ok) {
                    this.showToast('Uploaded!')
                } else {
                    this.showToast(res.statusText + ' :(')
                }
            })
        },
        showToast (txt) {
            this.showInfo = true
            this.infoTxt = txt
            setTimeout(() => {
                this.showInfo = false
            }, 1000);
        },
        saveLocal () {
            if (!this.$refs.content) {
                return
            }
            this.checkArea()
            window.localStorage.setItem(`COMP_EDITOR_${this.name}`, this.$refs.content.innerHTML)
        },
        checkArea () {
            const {minArea} = this
            const areaClassName = 'Editor-Area'
            const areaStyle = 'flex:1; outline:none;'
            const areaStart = `<div class="${areaClassName}" style="${areaStyle}" contenteditable>`
            const areaEnd = `</div>`
            /**
             * 处理分区
             */
            if (minArea > 1) {
                const { childNodes = [] } = this.$refs.content
                /** 是否子节点都是区域节点 */
                let isInArea = true
                /** 剩余应有区域数 */
                let lastNodeNum = minArea
                /** 重新拼接html */
                let outerHTML = ''

                /**
                 * 遍历子节点
                 */
                for (let node of childNodes) {
                    /**
                     * 子节点不是约定的节点，创建一个区域节点，将剩余的内容都放进去
                     * 记一个节点
                     */
                    if (isInArea && node.className !== areaClassName) {
                        isInArea = false
                        lastNodeNum -= 1
                        outerHTML += areaStart
                    }
                    /**
                     * 正常子节点是区域节点，记一个节点
                     */
                    if (isInArea) {
                        lastNodeNum -= 1
                    }
                    /**
                     * 删除超出数量且内容为空的节点
                     */
                    if (!(isInArea && lastNodeNum < 0 && (!node.innerHTML || node.innerHTML == '<br>'))) {
                        outerHTML += node.outerHTML
                    }
                }

                /**
                 * 无异常，不处理
                 */
                if (isInArea && lastNodeNum == 0) {
                    return
                }

                /**
                 * 有新创建的节点，增加节点的关闭内容
                 */
                if (!isInArea) {
                    outerHTML += areaEnd
                }

                /**
                 * 节点数不足数的，再补充空的节点
                 */
                while (lastNodeNum-- > 0) {
                    outerHTML += areaStart + areaEnd
                }

                /**
                 * 更新html
                 */
                this.$refs.content.innerHTML = outerHTML
            }
        }
    },
}
</script>

<style module lang="stylus">
.toast
    height 0
    text-align right
    opacity 0
    transition all linear 0.3s
    padding-right 1em
    transform translateY(-1em)

    position sticky
    top 60px

    &.show
        opacity 1
        transform translateY(0.5em)

    label
        background-color #ecf5ff
        color #409eff
        border 1px solid #d9ecff
        border-radius 4px
        padding 5px 10px
        font-size 12px

.demo
    margin-top 1em
    margin-bottom 1em
    display flex
    align-items center
    justify-content space-between

    button
        float right
        padding 0.2em 0.7em
        font-size 1rem
        color #fff
        background-color $accentColor
        border-radius 4px
        -webkit-transition background-color 0.1s ease
        transition background-color 0.1s ease
        box-sizing border-box
        border 1px solid darken($accentColor, 10%)
        cursor pointer

        &:hover
            background-color lighten($accentColor, 10%)

        :global
            .icon.outbound
                color #fff

    button + button
        margin-right 5px

@media not screen
    .demo
        display none

.content
    border 1px solid $borderColor
    border-radius 4px
    padding 0.8em 1em
    min-height 8em
    margin-bottom 1em

    &.contentM
        display flex

    &.light
        background #fff
        color #353535
    &.dark
        background #111
        color #e8e8e8

    &:focus
        cursor auto
        border-color $accentColor
        outline-offset -2px
        outline none

    a:hover
        cursor pointer

    a
        font-weight inherit
.icon
    width 1em
    height 1em
    display inline-block
    vertical-align middle
    position relative
    top -1px
    fill currentColor
    overflow hidden
</style>
