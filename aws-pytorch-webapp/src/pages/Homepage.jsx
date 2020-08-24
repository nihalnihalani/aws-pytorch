import React from 'react';
import Navbar from '../components/navbar/navbar';
import MediaCard from '../components/cards/Card';
import { Grid } from '@material-ui/core';

export default function Homepage() {
	
		return (
			<div>
				<Grid justify="space-evenly" container direction="column">
					<Grid item>
						<Navbar />
					</Grid>

					<Grid justify="space-evenly" item container>
						<Grid item>
							<MediaCard
								image={'https://ctisus.com/resources/library/teaching-files/x-rays/371274.jpg'}
								title={'Chest scan'}
								content={'To detect covid people must upload their scanned x-ray '}
							/>
						</Grid>
						<Grid item>
							<MediaCard
								image={
									'https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection/mammograms/breast-density-and-your-mammogram-report/_jcr_content/par/responsive_columns/column-0/textimage/image.img.jpg/1570716399141.jpg'
								}
								title={'Breast scan'}
								content={
									'To know the possibility of you having a breast cancer please upload your x-ray'
								}
							/>
						</Grid>
						<Grid item>
							<MediaCard
								image={
									'https://prod-images-static.radiopaedia.org/images/4170261/c5d7c3ed6c7fe53e59c2dd902e44b9_big_gallery.jpg'
								}
								title={'Brain scan'}
								content={'Please upload your brain-xray to detect any brain related cancer'}
							/>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}


