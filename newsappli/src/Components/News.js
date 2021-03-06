import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

    article =  [
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Amanda Woods",
            "title": "Northern California family found on hiking trail died of extreme heat - New York Post ",
            "description": "Jonathan Gerrish, his wife Ellen Chung and their 1-year-old daughter Aurelia “Miju” Chung-Gerris died of hyperthermia — which occurs when a person’s body temperature is dangerously high.",
            "url": "https://nypost.com/2021/10/22/northern-california-family-found-on-hiking-trail-died-of-extreme-heat/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/10/hp-California-Family-Mysterious-Deaths-2.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021-10-22T15:52:00Z",
            "content": "The Northern California family of three found dead on a remote Sierra National Forest hiking trail over the summer died of extreme heat as temperatures soared to 109 degrees, authorities said this we… [+3031 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Marcel Louis-Jacques",
            "title": "Miami Dolphins coach reiterates support for Tua Tagovailoa as Deshaun Watson rumors swirl - ESPN",
            "description": "Miami coach Brian Flores publicly endorsed Tua Tagovailoa as the Dolphins' quarterback Friday after rumors of a potential trade for Texans QB Deshaun Watson flared once again earlier this week.",
            "url": "https://www.espn.com/nfl/story/_/id/32451957/miami-dolphins-coach-reiterates-support-tua-tagovailoa-deshaun-watson-rumors-swirl",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0831%2Fr903048_1296x729_16%2D9.jpg",
            "publishedAt": "2021-10-22T15:50:11Z",
            "content": "MIAMI -- Dolphins coach Brian Flores gave a public endorsement Friday of Tua Tagovailoa, after rumors of a potential trade for Houston Texans quarterback Deshaun Watson again flared earlier this week… [+3279 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Sean Hollister",
            "title": "Home Alone is now a $250 Lego set, and it might be the most impressive fan-inspired model yet - The Verge",
            "description": "Lego has revealed its largest fan-inspired Lego Ideas set yet. It’s Kevin McAllister’s iconic house from Home Alone, and it’s a 3,955-piece marvel filled with iconic movie moments.",
            "url": "https://www.theverge.com/2021/10/22/22739574/home-alone-movie-lego-set",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/zWX4a71K8weqCQ0yaU0uoe9fTdE=/0x328:2560x1668/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22947046/home_alone_lego_04.jpg",
            "publishedAt": "2021-10-22T15:31:42Z",
            "content": "If you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.Some of the most amazing Lego sets of the past decade have been dreamt up by fans and this week, the … [+1419 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Ben Rohrbach",
            "title": "Reports: Ben Simmons 'not mentally ready to play' for Philadelphia 76ers - Yahoo Sports",
            "description": "The Ben Simmons saga took the next step on a path leading who knows where on Friday morning, as the All-Star and All-Defensive point guard informed the...",
            "url": "https://sports.yahoo.com/reports-ben-simmons-not-mentally-ready-to-play-for-philadelphia-76-ers-151433082.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/IPZ8iwurQ0QZJaiUS5.PmQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-10/7ea4aa80-334a-11ec-abdd-e10cc4d9423a",
            "publishedAt": "2021-10-22T15:14:33Z",
            "content": "The Ben Simmons saga took the next step on a path leading who knows where on Friday morning, as the All-Star and All-Defensive point guard informed the Philadelphia 76ers he's still \"not mentally rea… [+4674 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Dan Mangan, Yun Li",
            "title": "Lighthouse Investment hedge fund sells stake in Trump SPAC firm DWAC after merger news, big stock price rise - CNBC",
            "description": "Lighthouse Investment Partners sold its stake in Digital World Acquisition Corp. after the news of a Trump merger and a huge rise in the price of its stock.",
            "url": "https://www.cnbc.com/2021/10/22/hedge-fund-sells-stake-in-trump-spac-firm-dwac-after-merger-news.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106964472-1634905991280-gettyimages-1236040579-RAFAPRESS_21102021-1555.jpeg?v=1634906093",
            "publishedAt": "2021-10-22T15:07:24Z",
            "content": "At least one hedge fund sold its stake in the SPAC Digital World Acquisition Corp. after the firm announced plans to merge with the social media company planned by former President Donald Trump.\r\nLig… [+3480 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "CNBC US Source",
            "title": "Watch Fed Chairman Jerome Powell speak live at a Bank for International Settlements conference - CNBC",
            "description": null,
            "url": "https://www.cnbc.com/2021/10/22/watch-fed-chairman-jerome-powell-speak-live-at-a-bank-of-international-settlements-conference.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106950445-16330264132021-09-30t173409z_1813942145_rc2g0q9wxb9p_rtrmadp_0_health-coronavirus-powell-yellen.jpeg?v=1633026439",
            "publishedAt": "2021-10-22T15:02:49Z",
            "content": "[The stream is slated to start at 11 a.m. ET. Please refresh the page if you do not see a player above at that time.]\r\nFederal Reserve Chairman Jerome Powell speaks Friday to the Virtual Bank for Int… [+175 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "CDC endorses boosters for Moderna and Johnson & Johnson Covid vaccines - The Guardian",
            "description": "Health officials say millions more Americans can get a booster shot and choose a different vaccine for the extra dose",
            "url": "https://amp.theguardian.com/us-news/2021/oct/22/cdc-covid-boosters-moderna-johnson-and-johnson-mixing",
            "urlToImage": null,
            "publishedAt": "2021-10-22T15:02:00Z",
            "content": "US newsHealth officials say millions more Americans can get a booster shot and choose a different vaccine for the extra dose\r\nFri 22 Oct 2021 13.45 BST\r\nMillions more Americans can get a Covid-19 boo… [+4523 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Mitchel Broussard",
            "title": "Deals: Amazon Introduces First Discount on 14-Inch MacBook Pro, Get 8-Core M1 Pro 512GB Model for... - MacRumors",
            "description": "Amazon has introduced its first ever discount on the all-new 14-inch MacBook Pro. You can get the 8-Core M1 Pro 512GB model for $1,949.99, down...",
            "url": "https://www.macrumors.com/2021/10/22/deals-amazon-14-inch-macbook-pro/",
            "urlToImage": "https://images.macrumors.com/t/RaDrEZg1EFIZgDqmFNQY860RMqk=/2068x/https://images.macrumors.com/article-new/2021/10/14-16-inch-2021-mbps-back-to-back-feature-orange.jpg",
            "publishedAt": "2021-10-22T14:36:26Z",
            "content": "Amazon has introduced its first ever discount on the all-new 14-inch MacBook Pro. You can get the 8-Core M1 Pro 512GB model for $1,949.99, down from $1,999.00. This $50 sale is the first time we're t… [+1562 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kotaku"
            },
            "author": "Jeremy Winslow",
            "title": "Remastered GTA San Andreas Is Coming To Xbox Game Pass - Kotaku",
            "description": "While San Andreas hits Xbox’s subscription service, PlayStation Now will get GTA III in December",
            "url": "https://kotaku.com/remastered-gta-san-andreas-is-coming-to-xbox-game-pass-1847916194",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3d5c17ea2fc71df5da674aa3ce59325e.jpg",
            "publishedAt": "2021-10-22T14:30:00Z",
            "content": "Alongside news thatGrand Theft Auto: The Trilogya remastered bundle of the first three 3D GTA gamesdrops on November 11, Rockstar stealthily revealed that GTA: San Andreas will also hit Xbox Game Pas… [+1736 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "The Associated Press",
            "title": "Robert Durst charged with 1982 murder of wife Kathie Durst - NBC News",
            "description": "Millionaire real estate scion Robert Durst has been charged in suburban New York City with the death of his former wife, Kathie Durst, who vanished in 1982, authorities confirmed Friday.",
            "url": "https://www.nbcnews.com/news/us-news/robert-durst-charged-1982-murder-wife-kathie-durst-n1282152",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_41/3476381/210520-robert-durst-an.jpg",
            "publishedAt": "2021-10-22T14:18:10Z",
            "content": "NEW YORK Millionaire real estate scion Robert Durst has been charged in suburban New York City with the death of his former wife, Kathie Durst, who vanished in 1982, authorities confirmed Friday.\r\nA … [+1898 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Elton John Admits He Can Still 'Explode At Any Moment' Due to Childhood Trauma - TMZ",
            "description": "Elton John says his childhood traumas can still control him today and, in addition to shaping his parenting style.",
            "url": "https://www.tmz.com/2021/10/22/elton-john-explode-at-any-moment-childhood-trauma-parenting/",
            "urlToImage": "https://imagez.tmz.com/image/41/16by9/2021/10/22/4189b18d6bce4e28812c634874da4794_xl.jpg",
            "publishedAt": "2021-10-22T14:13:00Z",
            "content": "Elton John says his childhood traumas can still control him today and, in addition to shaping his parenting style ... they can make him erupt in anger without warning.\r\nSir Elton had already revealed… [+1093 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": null,
            "title": "iPod success story was down to Steve Jobs keeping his word, says Tony Fadell - 9to5Mac",
            "description": "The iPod success story was far from assured, even after it was launched, says Tony Fadell, the man dubbed \"father of the iPod\" ...",
            "url": "https://9to5mac.com/2021/10/22/ipod-success-story-steve-jobs/",
            "urlToImage": "https://i2.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/10/iPod-success-story.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2021-10-22T14:12:00Z",
            "content": "The iPod success story was far from assured, even after it was launched, says Tony Fadell, the man dubbed “father of the iPod.”\r\nEarly sales were nothing to write home about, and Fadell felt it would… [+3266 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "By <a href=\"/profiles/melissa-mahtani\">Melissa Mahtani</a>, <a href=\"/profiles/meg-wagner\">Meg Wagner</a>, <a href=\"/profiles/veronica-rocha\">Veronica Rocha</a> and <a href=\"/profiles/aditi-sandal\">Aditi Sangal</a>, CNN",
            "title": "The latest on the Alec Baldwin prop gun shooting: Liive Updates - CNN",
            "description": "A film crew member has died and another was injured after actor Alec Baldwin discharged a prop firearm on the set of the movie \"Rust\" in New Mexico on Thursday. Follow here for the latest news updates.",
            "url": "https://www.cnn.com/entertainment/live-news/alec-baldwin-movie-set-shooting-10-22-21/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211022020425-01-alec-baldwin-1021-super-tease.jpg",
            "publishedAt": "2021-10-22T13:53:00Z",
            "content": "Alec Baldwin has made his first public statement since a fatal shooting on the set of his new film on Thursday.\r\n\"There are no words to convey my shock and sadness regarding the tragic accident that … [+1604 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Delta 'Plus' Covid variant may be more transmissible - BBC News",
            "description": "It may be more contagious than Delta, but there is no evidence yet that it causes worse illness, experts say.",
            "url": "https://www.bbc.com/news/health-59009293",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/139C7/production/_114872308_gettyimages-1212213050.jpg",
            "publishedAt": "2021-10-22T13:51:27Z",
            "content": "By Michelle RobertsHealth editor, BBC News online\r\nImage source, Getty Images\r\nA new mutated form of coronavirus that some are calling \"Delta Plus\" may spread more easily than regular Delta, UK exper… [+2424 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Seth Walder",
            "title": "Breaking down the most likely College Football Playoff combinations - ESPN",
            "description": "Which four-team combination is the most likely to play out in this season's College Football Playoff?",
            "url": "https://www.espn.com/college-football/story/_/page/weeklyscenario102221/breaking-most-likely-college-football-playoff-combinations",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1021%2Fr926473_1296x729_16%2D9.jpg",
            "publishedAt": "2021-10-22T13:50:12Z",
            "content": "Let's talk College Football Playoff combinations.\r\nWith the playoff picture starting to come into focus now, there are specific playoff foursomes that now have a non-trivial chance of occurring. The … [+6082 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Daniel Dale",
            "title": "Fact-checking Biden's CNN town hall in Baltimore - CNN",
            "description": "President Joe Biden participated Thursday in a CNN town hall in Baltimore, taking questions from anchor Anderson Cooper and local residents about his legislative agenda and a variety of other topics.",
            "url": "https://www.cnn.com/2021/10/22/politics/fact-check-joe-biden-town-hall/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211022001808-39-week-in-photos-1021-super-tease.jpg",
            "publishedAt": "2021-10-22T13:36:00Z",
            "content": "(CNN)President Joe Biden participated Thursday in a CNN town hall in Baltimore, taking questions from anchor Anderson Cooper and local residents about his legislative agenda and a variety of other to… [+5779 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Ed Pilkington",
            "title": "Biden gives strongest signal he's ready to move to end Senate filibuster - The Guardian",
            "description": "After voting rights defeat, president expresses mounting frustration over rule that allows 41 senators to block legislation",
            "url": "https://amp.theguardian.com/us-news/2021/oct/22/joe-biden-senate-filibuster-republicans-politics",
            "urlToImage": "https://i.guim.co.uk/img/media/cb140a9be1a6cc05d9544ebab6c6496e7a2030cc/0_167_5039_3025/master/5039.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=59646d11f4458e59506d0f3a47d90c5c",
            "publishedAt": "2021-10-22T13:22:00Z",
            "content": "Joe Biden has given the strongest indication yet that he is willing to end or whittle down the Senate filibuster as a means of overcoming Republican intransigence and moving ahead with reforms to vot… [+3412 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "Brendan Cole",
            "title": "Steve Bannon Silenced on His Podcast After Being Held in Criminal Contempt - Newsweek",
            "description": "Rep. Marjorie Taylor Greene told Bannon's War Room about the vote to hold the host in criminal contempt over the January 6 insurrection probe.",
            "url": "https://www.newsweek.com/steve-bannon-january-6-contempt-marjorie-taylor-greene-1641572",
            "urlToImage": "https://d.newsweek.com/en/full/1918019/former-white-house-chief-strategist-steve-bannon.jpg",
            "publishedAt": "2021-10-22T12:58:55Z",
            "content": "Steve Bannon's podcast has heard an assessment of the vote to hold him in contempt of Congress for defying a subpoena from the committee investigating the January 6 insurrection.\r\nThursday's 229-202 … [+2618 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Story by Reuters",
            "title": "Patagonian fossils show Jurassic dinosaur had the herd mentality - CNN",
            "description": "A vast trove of fossils unearthed in Argentina's southern Patagonia region is offering the oldest-known evidence that some dinosaurs thrived in a complex and well-organized herd structure, with adults caring for the young and sharing a communal nesting ground.",
            "url": "https://www.cnn.com/2021/10/22/world/patagonian-fossils-jurassic-dinosaur-herd-mentality-intl-scli/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211022074532-patagonia-fossilized-egg-jurassic-dinosaur-super-tease.jpg",
            "publishedAt": "2021-10-22T12:41:00Z",
            "content": "(CNN)A vast trove of fossils unearthed in Argentina's southern Patagonia region is offering the oldest-known evidence that some dinosaurs thrived in a complex and well-organized herd structure, with … [+3568 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "",
            "title": "Pfizer-BioNTech COVID vaccine appears more than 90% effective in kids 5 to 11 - NPR",
            "description": "The companies studied a 10 microgram vaccine dose in children 5 to 11, a third of the dose used for adults, to minimize side effects and because it still prompts a strong immune response.",
            "url": "https://www.npr.org/sections/health-shots/2021/10/22/1048334791/pfizer-biontech-covid-vaccine-appears-more-than-90-effective-in-kids-5-to-11",
            "urlToImage": "https://media.npr.org/assets/img/2021/10/22/pfevax_gettyimages-1333855824_wide-2abb5281c4425f1c72e554b45c8de91f3f417575.jpg?s=1400",
            "publishedAt": "2021-10-22T12:33:02Z",
            "content": "Pharmacist LaChandra McGowan prepares a dose of the Pfizer COVID-19 vaccine at a clinic operated by DePaul Community Health in New Orleans in August. Soon, children ages 5 to 11 could be eligible for… [+1166 chars]"
        }
    ]

    constructor () {
        super();
        this.state = {
           articles : [],
           loading : false,
           page : 1
        }
    }


   async  componentDidMount() {
       let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=72844674395744f2b3cec07719bc4c46`;
       let data = await fetch(url);
       let parsedData = await data.json();
       this.setState({articles: parsedData.articles, totalResults : parsedData.totalResults});
   }

    nextPage= async()=>{
        if(this.state.page + 1 > Math.ceil (this.state.totalResults/30)){

        }
        else{        
        console.log('next');
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=72844674395744f2b3cec07719bc4c46&page=${ this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState ({
            page: this.state.page + 1,
            articles: parsedData.articles
       })
    }
   }


   previous= async()=>{
    console.log('previous');
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=72844674395744f2b3cec07719bc4c46&page=${this.state.page- 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState ({
        page: this.state.page - 1,
        articles: parsedData.articles
    })
}



    render() {
        return (
            <div>
                <div className="container my-2">
                    <div className="row">
                        {this.state.articles.map((element) =>{
                            return  <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title} description={element.description} imgurl={element.urlToImage} newsUrl={element.url} />
                        </div>
                        })}
                       
                    </div>
                </div>

                        <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.previous} >Previous</button>
                        <button type="button" className="btn btn-dark"  onClick={this.nextPage}  >Next</button>
                        </div>

            </div>
        )
    }
}

export default News
