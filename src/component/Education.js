import React from 'react';

const Education = () => {
	return (
		<div className='content'>
			<div className='card' style={{ color: '#000000' }}>
				<h1>Education</h1>
				{/* <hr /> */}
				<div className='content-abt'>
					<p>
						<h2 style={{ margin: '20px auto 20px auto ', width: '100%' }}>
							<span>Higher Education</span>
						</h2>

						<div style={{ margin: '0px 10px 0px', paddingBottom:'30px' }}>
							<table width='100%' border='1px solid green' padding='0'>
								<tr>
									<th>INSTITUTION</th>
									<th>YEAR</th>
									<th>AWARD</th>
								</tr>
								<tr>
									<td>Makerere University</td>
									<td>2010 - 2014</td>
									<td>Honours Bachelors degree in Software Engineering</td>
								</tr>
							</table>
							<h2 style={{ margin: '20px auto 20px auto ', width: '100%' }}>
								<span>Certificate</span>
							</h2>
							<table width='100%' border='1px solid green'>
								<tr>
									<th>COMPANY</th>
									<th>YEAR</th>
									<th>AWARD</th>
								</tr>
								<tr>
									<td>WomenInFinTech</td>
									<td>12-18, September, 2020</td>
									<td>Certificate of excellence in WomenInFinTech hackathon</td>
								</tr>
								<tr>
									<td>Tunga</td>
									<td>July - December, 2019</td>
									<td>Advanced computer programming training</td>
								</tr>
								<tr>
									<td>Andela Uganda Limited</td>
									<td>September - November, 2018</td>
									<td>Andela Women in technology certificate</td>
								</tr>
							</table>
						</div>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Education;
