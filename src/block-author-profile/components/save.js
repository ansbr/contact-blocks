/**
 * Internal dependencies
 */
import classnames from 'classnames';
import ProfileBox from './profile';
import SocialIcons from './social';
import AvatarColumn from './avatar';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const {
	RichText
} = wp.editor;

export default class Save extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			profileName,
			profileTitle,
			profileContent,
			profileImgURL,
			profileImgAlt,
			profileImgID,
			profileTextColor
		} = this.props.attributes;

		return (

			/* Save the block markup for the front end */
			<ProfileBox { ...this.props }>
				{ profileImgURL && (
					<AvatarColumn { ...this.props }>
						<figure className="cb-profile-image-square">
							<img
								className={ classnames(
									'cb-profile-avatar',
									'wp-image-' + profileImgID
								) }
								src={ profileImgURL }
								alt={ profileImgAlt }
							/>
						</figure>
					</AvatarColumn>
				) }

				<div
					className={ classnames(
						'cb-profile-column cb-profile-content-wrap'
					) }
				>
					{ profileName && (
						<RichText.Content
							tagName="h2"
							className="cb-profile-name"
							style={ {
								color: profileTextColor
							} }
							value={ profileName }
						/>
					) }

					{ profileTitle && (
						<RichText.Content
							tagName="p"
							className="cb-profile-title"
							style={ {
								color: profileTextColor
							} }
							value={ profileTitle }
						/>
					) }
					<div class="cb-row">
						{ profileContent && (
							<div class="cb-col cb-col-auto">
								<RichText.Content
									tagName="div"
									className="cb-profile-text"
									value={ profileContent }
								/>
							</div>
						) }
						<div class="cb-col">
							<SocialIcons { ...this.props } />
						</div>
					</div>
				</div>
			</ProfileBox>
		);
	}
}
