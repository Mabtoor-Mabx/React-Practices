import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

    articles= [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "Khanyiso Tshwaku",
            "title": "Former boss Faul acknowledges 'too many whites' in top Cricket SA jobs: 'It's something I regret'",
            "description": "Jacques Faul says the raft of appointments of white males into senior positions at Cricket SA in the chaotic December 2019 period wasn't good for the organisation's transformation optics.",
            "url": "https://www.news24.com/sport/Cricket/former-boss-faul-acknowledges-too-many-whites-in-top-cricket-sa-jobs-its-something-i-regret-20211022",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/10423/0cd31523607f4c6482e2b8efbdec146f.jpg",
            "publishedAt": "2021-10-22T07:15:59+00:00",
            "content": "<ul><li>Former Cricket South Africa chief executive officer Jacques Faul believes there were too many whites involved in top positions at CSA at the time of his appointment in December 2019.</li><li>… [+2791 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]

    constructor()
    {
        super();
        this.state= {
          articles  : [],
          loading : false
        }
    }


  async  componentDidMount () {
    //   console.log('cdm');
    let url = "https://newsapi.org/v2/top-headlines?country=nz&apiKey=72844674395744f2b3cec07719bc4c46";
    let data =  await fetch(url);
    // console.log(data);
    let ParsedData = await data.json();
    console.log(ParsedData);
    this.setState({articles : ParsedData.articles})
    }


    render() {
        return (
            <div className='container'>
                <div className="row">
                    {this.state.articles.map((element) => {
                       return  <div className="col-md-4" key={element.url}>
                        <NewsItems title={element.title.slice(0,30)}  description={element.description.slice(0,50)} newsUrl={element.url} ImageUrl= {element.urlToImage}  info='Read More' />
                        </div>
                             } ) }
                  
                </div>
                
            </div>
        )
    }
}

export default News
