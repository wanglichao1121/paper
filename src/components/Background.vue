<script lang="tsx">
import { defineComponent, onMounted, ref } from 'vue'
import { bez,circle } from '@/interface/visual'
export default defineComponent({
    setup() {
        const bg=ref<HTMLCanvasElement>()
        const lines=ref<bez[]>()
        const startStamp=ref<number>()
        const setSize=()=>{
            if(bg.value!==undefined){
                const height=document.documentElement.clientHeight;
                const width=document.documentElement.clientWidth
                bg.value.height=height;
                bg.value.width=width;
                const wm=width/100;
                const hm=height/100;
                lines.value=[{
                    p1: { x: -wm*10,y: hm*60,r: wm*10,w: 7},
                    p2: { x: wm*20,y: hm*10,r: wm*20,w: 2},
                    p3: { x: wm*80,y: hm*90,r: wm*20,w: 3},
                    p4: { x: wm*110,y: hm*45,r: wm*10,w: 5}
                },{
                    p1: { x: -wm*10,y: hm*40,r: wm*10,w: 3},
                    p2: { x: wm*20,y: hm*90,r: wm*10,w: 7},
                    p3: { x: wm*80,y: hm*10,r: wm*5,w: 2},
                    p4: { x: wm*120,y: hm*55,r: wm*10,w: 1}
                }]
            }
        };
        const calcX=(p: circle,time: number)=>p.x+Math.cos(time/20000*p.w)*p.r;
        const calcY=(p: circle,time: number)=>p.y+Math.sin(time/20000*p.w)*p.r;
        const drawBg=(timeStamp: number)=>{
            if(startStamp.value===undefined)
                startStamp.value=timeStamp;
            const elapsed=timeStamp-startStamp.value
            if(bg.value===undefined)
                return;
            const ctx=bg.value.getContext('2d');
            if(ctx===null)
                return;
            ctx.clearRect(0,0,bg.value.width,bg.value.height);
            ctx.fillStyle='rgb(231,231,231,1)';
            ctx.fillRect(0,0,bg.value.width,bg.value.height);
            ctx.strokeStyle='gray';
            ctx.beginPath();
            lines.value?.forEach((item)=>{
                ctx.moveTo(calcX(item.p1,elapsed),calcY(item.p1,elapsed));
                ctx.bezierCurveTo(calcX(item.p2,elapsed),calcY(item.p2,elapsed),calcX(item.p3,elapsed),calcY(item.p3,elapsed),calcX(item.p4,elapsed),calcY(item.p4,elapsed));
            });
            ctx.stroke();
            window.requestAnimationFrame(drawBg);
        }
        onMounted(()=>{
            window.onresize=setSize;
            setSize();
            window.requestAnimationFrame(drawBg);
        })
        return ()=><canvas ref={bg}/>;
    },
})
</script>


<style lang="scss" scoped>
canvas{
    z-index: -2;
    position: absolute;
    filter: blur(2px);
}
</style>