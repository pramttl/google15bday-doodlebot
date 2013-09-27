from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# I am gonna use Firefox for the bot. 
# I am not sure if the bot score depends on firefox version?
driver = webdriver.Firefox()

# Go to the google home page.
driver.get("http://www.google.com")

# Locate the doodle canvas.
elem = driver.find_element_by_id("hplogoc")

# Hit the space bar to press play.
elem.send_keys(" ")
time.sleep(1)

# Hit the spacebar again to get ready.
elem.send_keys(" ")

# Lets get playing
time.sleep(1.9)

# Hits on the star, start here.

#-Hit-1
elem.send_keys(" ")
time.sleep(2)
#-Hit-2
elem.send_keys(" ")
time.sleep(3.3)
#-Hit-3
elem.send_keys(" ")
time.sleep(3.5)
#-Hit-4
elem.send_keys(" ")
time.sleep(2.6)
#-Hit-5
elem.send_keys(" ")
time.sleep(3)
#-Hit-6
elem.send_keys(" ")
time.sleep(3)
#-Hit-7
elem.send_keys(" ")
time.sleep(3)
#-Hit-8
elem.send_keys(" ")
time.sleep(3)
#-Hit-9
elem.send_keys(" ")
time.sleep(3)
#-Hit-10
elem.send_keys(" ")

# Game over, Note your score and rate the bot! :)
