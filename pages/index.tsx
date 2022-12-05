import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { defaultKeymap } from "@codemirror/commands"
import { useEffect, useRef } from 'react'
import {EditorView, basicSetup} from "codemirror"
import {json} from "@codemirror/lang-json"
import {oneDark} from '@codemirror/theme-one-dark'
export default function Home() {
  const codeMirrorRef = useRef()
  useEffect(() => {
     new EditorView({
      doc: `{
        "hero": {
            "aspectRatio": "4:2",
            "aspectMode": "cover",
            "type": "image",
            "size": "full",
            "url": "https://dataslot-resources.s3.ap-southeast-1.amazonaws.com/RobotMaker/crm-images/logo"
        },
        "type": "bubble",
        "size": "giga",
        "body": {
            "layout": "vertical",
            "spacing": "sm",
            "type": "box",
            "contents": [
                {
                    "weight": "bold",
                    "text": "ใบแจ้งซ่อมของคุณได้ถูกสร้างขึ้นแล้ว",
                    "type": "text",
                    "color": "#023e7d",
                    "align": "center"
                },
                {
                    "layout": "horizontal",
                    "margin": "md",
                    "type": "box",
                    "contents": [
                        {
                            "color": "#0353a4",
                            "size": "sm",
                            "flex": 5,
                            "weight": "bold",
                            "text": "หมายเลขติดตามงาน",
                            "type": "text",
                            "wrap": true
                        },
                        {
                            "color": "#0353a4",
                            "size": "sm",
                            "flex": 6,
                            "weight": "bold",
                            "text": "[[orderNumber]]",
                            "type": "text",
                            "align": "end",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "separator",
                    "margin": "md"
                },
                {
                    "layout": "vertical",
                    "margin": "md",
                    "spacing": "md",
                    "type": "box",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "weight": "bold",
                                    "text": "รหัสสินค้า",
                                    "type": "text",
                                    "color": "#464F69",
                                    "align": "start",
                                    "size": "sm"
                                },
                                {
                                    "size": "sm",
                                    "color": "#464F69",
                                    "flex": 2,
                                    "weight": "bold",
                                    "text": "ชื่อสินค้า",
                                    "type": "text",
                                    "align": "center"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "weight": "bold",
                                    "text": "-",
                                    "type": "text",
                                    "color": "#0353a4",
                                    "size": "xs",
                                    "flex": 2
                                },
                                {
                                    "color": "#0353a4",
                                    "size": "xs",
                                    "flex": 5,
                                    "weight": "bold",
                                    "text": "[[detail.productInfo.model]]",
                                    "type": "text",
                                    "align": "center"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "separator"
                },
                {
                    "weight": "bold",
                    "margin": "md",
                    "text": "ข้อมูลการรับซ่อมสินค้า",
                    "type": "text",
                    "size": "sm"
                },
                {
                    "layout": "vertical",
                    "action": {
                        "type": "postback",
                        "data": "hello",
                        "label": "action"
                    },
                    "type": "box",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "text": "ชื่อลูกค้า",
                                    "type": "text",
                                    "color": "#555555",
                                    "size": "xs",
                                    "flex": 2
                                },
                                {
                                    "color": "#0353a4",
                                    "size": "xs",
                                    "flex": 5,
                                    "weight": "bold",
                                    "text": ": [[detail.customerInfo.name]]",
                                    "type": "text",
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "text": "เบอร์โทรศัพท์",
                                    "type": "text",
                                    "color": "#555555",
                                    "size": "xs",
                                    "flex": 2
                                },
                                {
                                    "color": "#0353a4",
                                    "size": "xs",
                                    "flex": 5,
                                    "weight": "bold",
                                    "text": ": [[detail.customerInfo.phoneNumber]]",
                                    "type": "text",
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "text": "ที่อยู่",
                                    "type": "text",
                                    "color": "#555555",
                                    "size": "xs",
                                    "flex": 2
                                },
                                {
                                    "color": "#0353a4",
                                    "size": "xs",
                                    "flex": 5,
                                    "weight": "bold",
                                    "text": ": [[detail.customerInfo.address]]",
                                    "type": "text",
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "text": "วันที่แจ้งซ่อม",
                                    "type": "text",
                                    "color": "#555555",
                                    "size": "xs",
                                    "flex": 2
                                },
                                {
                                    "color": "#0353a4",
                                    "size": "xs",
                                    "flex": 5,
                                    "weight": "bold",
                                    "text": ": [[detail.taskInfo.createdDate]]",
                                    "type": "text",
                                    "wrap": true
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "text": "ช่องทาง",
                                    "type": "text",
                                    "color": "#555555",
                                    "size": "xs",
                                    "flex": 2
                                },
                                {
                                    "color": "#0353a4",
                                    "size": "xs",
                                    "flex": 5,
                                    "weight": "bold",
                                    "text": ": [[detail.customerInfo.channel]]",
                                    "type": "text",
                                    "wrap": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "separator",
                    "margin": "md"
                },
                {
                    "layout": "vertical",
                    "margin": "md",
                    "spacing": "sm",
                    "type": "box",
                    "contents": [
                        {
                            "weight": "bold",
                            "text": "สถานะการซ่อม",
                            "type": "text",
                            "size": "sm"
                        },
                        {
                            "layout": "vertical",
                            "action": {
                                "type": "postback",
                                "data": "[[checklists]]",
                                "label": "@repeat"
                            },
                            "type": "box",
                            "contents": [
                                {
                                    "layout": "horizontal",
                                    "type": "box",
                                    "alignItems": "center",
                                    "contents": [
                                        {
                                            "text": "2022-02-06",
                                            "type": "text",
                                            "color": "#0353a4",
                                            "size": "xs",
                                            "flex": 2
                                        },
                                        {
                                            "layout": "vertical",
                                            "type": "box",
                                            "alignItems": "center",
                                            "contents": [
                                                {
                                                    "layout": "vertical",
                                                    "borderColor": "#0353a4",
                                                    "contents": [],
                                                    "borderWidth": "3px",
                                                    "width": "12px",
                                                    "type": "box",
                                                    "cornerRadius": "30px",
                                                    "height": "12px"
                                                }
                                            ]
                                        },
                                        {
                                            "weight": "bold",
                                            "text": "[[&alias]]",
                                            "type": "text",
                                            "size": "xs",
                                            "color": "#0353a4",
                                            "flex": 6
                                        }
                                    ]
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "text": " ",
                                            "type": "text",
                                            "size": "xs",
                                            "flex": 2
                                        },
                                        {
                                            "layout": "horizontal",
                                            "type": "box",
                                            "contents": [
                                                {
                                                    "layout": "horizontal",
                                                    "width": "2px",
                                                    "backgroundColor": "#0353a4",
                                                    "type": "box",
                                                    "contents": []
                                                }
                                            ],
                                            "justifyContent": "center"
                                        },
                                        {
                                            "layout": "vertical",
                                            "action": {
                                                "type": "postback",
                                                "data": "[[checklists.messages]]",
                                                "label": "@repeat"
                                            },
                                            "type": "box",
                                            "contents": [
                                                {
                                                    "text": "a",
                                                    "type": "text",
                                                    "size": "xs",
                                                    "wrap": true,
                                                    "flex": 6,
                                                    "gravity": "center"
                                                }
                                            ],
                                            "flex": 6
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }`,
      extensions: [
        basicSetup,
        json(),
        oneDark
      ],
      
      parent: document.querySelector("#editor")!
    })
  }, [])
  return (
    <section>
     <div id='editor'></div>
    </section>
  )
}
