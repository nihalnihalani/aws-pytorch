# aws-data-sets
Data from aws data exchange:
1. Global Coronavirus (COVID-19) Data provided by Enigma
2. Death Rates and Life Expectancy at Birth - US | CDC by Rearc
3. Motor Vehicle Occupant Death Rate, by Age and Gender, 2012 & 2014 | CDC by Rearc
4. USA Hospital Beds - COVID-19 | Definitive Healthcare by Rearc

## From data 1
Covid-19 is infecting and killing a lot of people, as in the table below

### Covid19 cases for top 5 countries (to date 08-12-2020)
United States     5172216

Brazil            3164785

India             2329638

Russia             895691

South Africa       566109

More importantly, the infecting curve is not flattening even after half a year, so we need to prepare for fighting with it for a long time. Hospitals would not be able to focus on this single disease, instead covid19 patients will be mixed with patients with all kinds of diseases. So it would be helpful to have a tool that distinguishes covid19 from other diseases. Given that one important step for covid19 diagnosis is x-ray scan, we developed a model that distinguishes different diseases including covid19, pneumonia, breast cancer, and brain tumor. (more can be integrated in future) We believe this tool can help doctors diagnose covid19 and other diseases from x-ray scans in seconds.

![image](https://github.com/nihalnihalani/aws-pytorch/blob/aws_data/aws_data/top5.png)
![image](https://github.com/nihalnihalani/aws-pytorch/blob/aws_data/aws_data/world.png)

## from data 2 & 3
The death rate in US has been decreasing for decades, as shown below. The death rate in 2014 was 733 per 100,000, which is about 2.3 million deaths. Covid19 has caused 173k death in less than a year, which is 7% of the total deaths in 2015. 7% percent look not too big, but it's equavalent to the decrease from 1998 to 2014, the effort of 16 years. 

![image](https://github.com/nihalnihalani/aws-pytorch/blob/aws_data/aws_data/death.png)

Comparing with one of the most common death causes, Motor Vehicle Occupant Death rate. From the aws data we calculated the death rate was 8 per 100,000, which means that car accidents only kills 1/7 of the killing of covid 19. 

## from data 4
Due to the covid19 pandemic, the hospital beds in USA is in shortage. Below shows the occupation rate for hospitals in all around USA. Interestingly there are still a lot empty beds to use. We are developing this tool to distinguish between covid19 and other diseases to help doctor better manage the use of beds. 
![image](https://github.com/nihalnihalani/aws-pytorch/blob/aws_data/aws_data/bed.png)


