/// <reference types="D:/MyProjects/Web/Vue3+vite/vue-project/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { ref, onMounted } from 'vue';
import axios from 'axios';
const count = ref(0);
const error = ref('');
const loading = ref(false);
onMounted(async () => {
    error.value = '';
    try {
        loading.value = true;
        const response = await axios.get('http://localhost:64527/api/counter');
        count.value = response.data.count ?? 0;
    }
    catch (error) {
        console.error('Error fetching counter:', error);
        error.value = '无法获取计数';
    }
    finally {
        loading.value = false;
    }
});
async function inc() {
    error.value = '';
    try {
        loading.value = true;
        const response = await axios.post('http://localhost:64527/api/counter/inc');
        count.value = response.data.count ?? 0;
    }
    catch (error) {
        console.error('Error incrementing counter:', error);
        error.value = '无法增加计数';
    }
    finally {
        loading.value = false;
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "p-6" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "text-2xl mb-4" },
});
(__VLS_ctx.count);
// @ts-ignore
[count,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.inc) },
    ...{ class: "px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" },
    disabled: (__VLS_ctx.loading),
});
// @ts-ignore
[inc, loading,];
if (__VLS_ctx.error) {
    // @ts-ignore
    [error,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "text-red-500 mt-2" },
    });
    (__VLS_ctx.error);
    // @ts-ignore
    [error,];
}
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-indigo-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        count: count,
        error: error,
        loading: loading,
        inc: inc,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
