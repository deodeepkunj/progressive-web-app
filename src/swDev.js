


export default function swDev(){
    console.log(process.env.PUBLIC_URL)
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.warn("response", response)
    })
}