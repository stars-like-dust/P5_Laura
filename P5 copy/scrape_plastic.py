from bs4 import BeautifulSoup as bs
import requests
import pandas as pd
import time

def scrape():
    url = 'https://www.bing.com/news/search?q=Plastic+Ocean&qpvt=plastic+ocean+news&FORM=EWRE'

    response = requests.get(url)
    soup = bs(response.text, 'html.parser')

    #SCRAPING 
    counter = 0
    plastic_image_urls = []

    plastic_news = soup.find_all("div", class_ = "newsitem")
    while (len(plastic_image_urls) < 3):
        for plastic in plastic_news:
            if "img" in str(plastic):
                
                link = plastic["url"]
                
                counter = counter +1
                image = plastic.find("img")
                if "data-src" in str(image):
                    img = plastic.find("img")["data-src"]
                else:
                    img = plastic.find("img")["src"]
                img_url = "https://bing.com" + img
                img_url = img_url.replace("w=258", "2=700")
                img_url = img_url.replace("h=145", "h=466")
                  
                news = plastic.find("a", class_ ="title")
                news_title = news.text

                snippet = plastic.find("div", class_ = "snippet").text
                source = plastic.find("div", class_ = "source").text  

                dictionary = {"title": news_title,
                          "img_url" : img_url,
                          "link" : link,
                            "snippet" : snippet,
                             "source": source}
                plastic_image_urls.append(dictionary)
 
    post = {
        "plastic_news" : plastic_image_urls
    }

    return(post)