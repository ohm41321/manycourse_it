import { defineStore } from "pinia";
import { ref } from 'vue';


export const dataStore = defineStore('course', () => {

    const courseList = ref([
    { 
    id: 1, name: 'Music',
    img: "https://continuingstudies.uvic.ca/media/ncghk1ss/mus-topic-header.jpg?anchor=center&mode=crop&width=710&height=315&rnd=133347052893000000",
    detail:'สอนทฤษฎีดนตรีบำบัด (Music Theory) ตั้งแต่การปูพื้นฐานด้านดนตรี จากคุณครูมีที่ประสบการณ์ทางด้านดนตรีมากกว่า 10 ปีประโยชน์ที่ผู้เรียนจะได้รับสามารถสอบเข้าคณะดุริยางค์ เอกวิชาดนตรี ของมหาวิทยาลัยดังๆ ได้ หรือสามารถสอบทฤษฎีดนตรีได้',
    wht_earn:'เพื่อพัฒนาทักษะความสามารถทางดนตรี เเละทำให้สามารถสอบเข้าคณะดุริยางค์ เอกวิชาดนตรี  หรือสามารถสอบทฤษฎีดนตรีได้',
    who_study:'ทุกคนที่เรียนดนตรี และสนใจเรียนทฤษฎีดนตรี เพื่อนำไปใช้ต่อยอดกับการเรียน, ผู้ที่ต้องการเตรียมสอบเข้า คณะดุริยางคศิลป์ ด้านดนตรี',
    knowledge:'ไม่จำเป็นต้องมีความรู้ เพียงแค่มีความสนใจทางด้านดนตรี',
    caption:'',
    },{ 
    id: 2, name: 'Cooking',
    img: "https://media.timeout.com/images/105170664/image.jpg",
    detail:'หลักสูตรเชฟอาหารไทย แบบเร่งรัด 90 ชั่วโมง (90 Hours Intensive Course) เป็นหลักสูตรที่เหมาะสำหรับผู้สนใจพัฒนาทักษะ และเทคนิคการทำอาหารไทยให้มากขึ้นในสายอาชีพที่ทำงานอยู่ในปัจจุบัน โดยจะเรียนรู้และลงมือปฎิบัติจริงในครัวที่ได้มาตรฐานมากกว่า 35 เมนู ที่เป็นอาหารไทย, ขนมไทย และของว่างที่มีเอกลักษณ์เฉพาะและรสชาติไทยแท้ สอนโดยอาจารย์และเชฟอาหารไทยมืออาชีพมาเป็นผู้ถ่ายทอดการสอนให้กับนักเรียนและคอยดูแลให้คำปรึกษานักเรียนอย่างใกล้ชิด',
    wht_earn:'เพื้อให้ผู้เรียนพัฒนาทักษะความสามารถทางด้านการทำอาหารให้ถูกสุขอนามัยอีกทั้งยังสามารถนำมาต่อยอดการประกอบอาชีพได้ในอนาคต',
    who_study:'บุคคลที่ต้องการเป็นเชฟอาหารไทย และต้องการทำงานในประเทศ หรือต่างประเทศบุคคลที่มีพื้นฐานการทำอาหารมาก่อน และมาเพิ่มเติมความรู้ด้านอาหารไทยให้มากขึ้นในสายอาชีพ บุคคลที่ต้องการสอบวัดระดับมาตรฐานอาชีพจากกรมพัฒนาฝีมือแรงงาน แต่มีเวลาเรียนจำกัด',
    knowledge:'ไม่จำเป็นต้องมีความรู้ เพียงแค่มีความสนใจทางด้านการทำอาหาร',
    caption:'',
    },{
    id: 3, name: 'Drawing',
    img: "https://www.hemeltoday.co.uk/webimg/T0FLMTMzNDczOTQ0.jpg?width=1200&enable=upscale&fbclid=IwAR0v2Gu-CPIi9YID-U1EtUen7UMD7Lcb4Dll1HsdovTxrnRzhWDUEWuMTeM",
    detail:'การสร้างภาพวาดเบื้องต้นในรูปแบบการ์ตูนและสติกเกอร์ใช้เทคนิคพื้นฐานในการเขียนและเรนเดอริ่งการวาดภาพตามแนวคิดและการสร้างภาพจากความคิดสร้างสรรค์',
    wht_earn:'เพื่อให้ผู้เรียนพัฒนาทักษะการวาดรูปการออกเเบบปูพื้นฐานความคิดเชิงศิลและสร้างสรรค์เพื่อให้ผู้เรียนสามารถนำไปต่อยอดได้ในหลายๆอาชีพ',
    who_study:'ผู้ที่สนใจในการศิลปะ คอร์สนี้เหมาะสำหรับบุคคลที่มีความสนใจในการเรียนรู้ศิลปะพัฒนาทักษะทางศิลป์ผู้ที่ต้องการพัฒนาทักษะการวาดรูป: หากคุณสนใจในการเรียนรู้การวาดรูปเบื้องต้นและสร้างสรรค์ศิลปะ, คอร์สนี้จะช่วยให้คุณพัฒนาทักษะนี้ได้ผู้ที่มีเวลาอยู่บ้านและต้องการการสอนออนไลน์: คอร์สนี้เหมาะสำหรับคนที่มีเวลาว่างที่จะลงมือทำศิลปะ',
    knowledge:'ผู้เรียนไม่จำเป็นต้องมีความรู้อะไรมาก่อนในคอร์สนี้ เนื่องจากเป็นคอร์สเริ่มต้นที่เหมาะสำหรับผู้ที่ไม่มีพื้นฐานหรือความรู้ด้านศิลปะมาก่อน คุณจะได้รับคำแนะนำและการสอนเบื้องต้นจากคอร์สนี้ เพียงแค่คุณมีความสนใจและความกระตือรือร้นในการเรียนรู้และพัฒนาทักษะทางศิลปะพอแล้ว',
    caption:'',
    },{ 
    id: 4, name: 'Exercise Program',
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    detail:'การออกกำลังกายเบื้องต้นที่สามารถทำที่บ้านการฝึกหรือยกเลิกแรงกล้างสตรีทไปในการออกกำลังกายการเพิ่มความยืดหยุ่นและความแข็งแกร่งของกล้ามเนื้อ',
    wht_earn:'เพิ้อให้ผู้เรียนเข้าใจพื้นฐานของการออกกำลังกายเพื่มขีดจำกัดของร่างกาย เพื่มความเข็งเเรงเเละสามารถต่อยอดให้กับผู้ที่สนใจจะเป็นนักกีฬา',
    who_study:'ผู้ที่สนใจในการออกกำลังกาย เพื่อสร้างสุขภาพที่ดีขึ้นและพัฒนาทักษะต่างๆผู้ที่ต้องการปรับปรุงสุขภาพร่างกาย: คอร์สนี้เหมาะสำหรับคนที่ต้องการออกกำลังกายเพื่อเพิ่มความแข็งแกร่งและความยืดหยุ่นของกล้ามเนื้อ, โดยไม่จำเป็นต้องไปยู่ในฟิตเนสหรือห้องออกกำลังกายผู้ที่มีเวลาอยู่บ้านและต้องการการสอนออนไลน์: คอร์สนี้เหมาะสำหรับคนที่มีเวลาว่างที่ออกกำลังกายโดยไม่ต้องเดินทางไปยุ่งกับคอร์สออฟไลน์.',
    knowledge:'ผู้เรียนไม่จำเป็นต้องมีความรู้อะไรมาก่อนในคอร์สนี้ เนื่องจากเป็นคอร์สเริ่มต้นที่เหมาะสำหรับผู้ที่ไม่มีพื้นฐานทางการออกกำลังกายมาก่อน คุณจะได้รับคำแนะนำและการสอนเบื้องต้นจากคอร์สนี้ เพียงแค่คุณมีความสนใจและความกระตือรือร้นในการเรียนรู้และพัฒนาทักษการออกกำลังกายคือพอแล้ว',
    caption:'',
    },
    ]);

    const packageList= ref([
        {
          id: 1,
          price: 1290,
          day:30,
          description1:'Average 43.-/day' ,
          keys_code:'R4G7T2Y9PQWC'
        },
        {
          id: 2,
          price: 1890,
          day:60,
          description1:'Average 945.-/month' ,
          keys_code:'LK6J3N8H5FEQ'
        },
        {
          id: 3,
          price: 2790,
          day:90,
          description1:'Average 930.-/month' ,
          keys_code:'XZ0V1M6WPDFG'
        },
        {
          id: 4,
          price: 3690,
          day:120,
          description1:'Average 922.-/month' ,
          keys_code:'Q1E2I3U5O94X'
        },
        {
          id: 5,
          price: 5390,
          day:180,
          description1:'Average 898.-/month' ,
          keys_code:'H6K4S7A8D3HW'
        },
        {
          id: 6,
          price: 9990,
          day:365,
          description1:'Average 832.-/month' ,
          keys_code:'B9N8M7L0O2ZD'
        },
      ]);
      
      const data_dev = ref([
         {
          id:1,name:'Athit Fongkhaimuk',
          img:'src/assets/pic/dev/462653794_1076703184190822_5725267680454312904_n.jpg',
          url:'https://poplme.co/G7lP22B1/share',
          text:'6504101409',
         },{
          id:2,name:'Chaiyut Suntharote',
          img:'src/assets/pic/dev/436261139_4436816383211391_786084775108301630_n.jpg',
          url:'https://poplme.co/GU4bLcu6/dash',
          text:'6504101318',
         }
      ])


    return { courseList, packageList, data_dev }
    
});
