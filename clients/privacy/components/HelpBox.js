import React from 'react';
import PropTypes from 'prop-types';
import { Twemoji } from 'react-emoji-render';
import {Panel, ListGroup, ListGroupItem } from 'react-bootstrap'
import {DocLinks} from "./DocLinks";
export const HelpBox = (props) => {
    return (
        <div
            style={{
                backgroundColor: '#fff'
            }}
            className={'col-xs-4'}
        >
            <p
                style={{
                    margin: 0,
                    padding: '.7em 1em',
                    borderBottom: '1px solid #eee'
                }}
            >
                {props.saveButton}
            </p>
            <h3>
                <Twemoji text=":volcano: FAQ" />
            </h3>
           <DocLinks />


            <h3>
                <Twemoji text=":volcano: Documentation" />
            </h3>
            <ListGroup
                style={{padding:'12px'}}
            >
                <ListGroupItem>
                    <Twemoji text=":eyes:" />
                    <a href="https://calderaforms.com/doc/setting-caldera-forms-gdpr-data-requests/?utm_source=wp-admin&utm_campaign=privacy-settings">
                        Setting Up Caldera Forms For GDPR Requests
                    </a>
                </ListGroupItem>
                <ListGroupItem>
                    <Twemoji text=":eyes:" />
                    <a href="https://calderaforms.com/gdpr/?utm_source=wp-admin&utm_campaign=privacy-settings">
                       All Caldera Forms GDPR Compliance Tools
                    </a>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
};

HelpBox.propTypes = {
    saveButton: PropTypes.object.isRequired
};