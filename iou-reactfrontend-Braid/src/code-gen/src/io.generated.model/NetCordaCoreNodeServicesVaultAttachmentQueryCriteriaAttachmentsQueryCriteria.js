/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria model module.
 * @module io.generated.model/NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria
 * @version 1.0.0
 */
class NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria {
    /**
     * Constructs a new <code>NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria</code>.
     * @alias module:io.generated.model/NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria
     */
    constructor() { 
        
        NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria} The populated <code>NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria();

            if (data.hasOwnProperty('uploaderCondition')) {
                obj['uploaderCondition'] = ApiClient.convertToType(data['uploaderCondition'], Object);
            }
            if (data.hasOwnProperty('filenameCondition')) {
                obj['filenameCondition'] = ApiClient.convertToType(data['filenameCondition'], Object);
            }
            if (data.hasOwnProperty('uploadDateCondition')) {
                obj['uploadDateCondition'] = ApiClient.convertToType(data['uploadDateCondition'], Object);
            }
            if (data.hasOwnProperty('contractClassNamesCondition')) {
                obj['contractClassNamesCondition'] = ApiClient.convertToType(data['contractClassNamesCondition'], Object);
            }
            if (data.hasOwnProperty('signersCondition')) {
                obj['signersCondition'] = ApiClient.convertToType(data['signersCondition'], Object);
            }
            if (data.hasOwnProperty('isSignedCondition')) {
                obj['isSignedCondition'] = ApiClient.convertToType(data['isSignedCondition'], Object);
            }
            if (data.hasOwnProperty('versionCondition')) {
                obj['versionCondition'] = ApiClient.convertToType(data['versionCondition'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} uploaderCondition
 */
NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria.prototype['uploaderCondition'] = undefined;

/**
 * @member {Object} filenameCondition
 */
NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria.prototype['filenameCondition'] = undefined;

/**
 * @member {Object} uploadDateCondition
 */
NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria.prototype['uploadDateCondition'] = undefined;

/**
 * @member {Object} contractClassNamesCondition
 */
NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria.prototype['contractClassNamesCondition'] = undefined;

/**
 * @member {Object} signersCondition
 */
NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria.prototype['signersCondition'] = undefined;

/**
 * @member {Object} isSignedCondition
 */
NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria.prototype['isSignedCondition'] = undefined;

/**
 * @member {Object} versionCondition
 */
NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria.prototype['versionCondition'] = undefined;






export default NetCordaCoreNodeServicesVaultAttachmentQueryCriteriaAttachmentsQueryCriteria;
