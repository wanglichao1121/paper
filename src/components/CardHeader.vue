<script lang="tsx">
import { defineComponent, inject, onMounted, Ref, ref } from 'vue'
export default defineComponent({
    setup() {
        const canvas=ref<HTMLCanvasElement>()
        onMounted(()=>{
            if(canvas.value===undefined)
                return;
            const ctx=canvas.value.getContext("2d")
            if(ctx===null)
                return;
            console.log(canvas.value.clientWidth)
            canvas.value.width=canvas.value.clientWidth
            canvas.value.height=canvas.value.clientHeight
            const img=new Image()
            img.src=require('@/assets/logo.png')
            img.onload=()=>{
                ctx.drawImage(img,0,0,100,100);
                ctx.font = "bold 36px serif";
                ctx.fillText("公告栏",95,65)
                ctx.fillRect(220,58,2000,4);
            }
        })
        return ()=><canvas ref={canvas}/>;
    },
})
</script>
