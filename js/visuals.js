// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

// Define the available data roles for the visual types
const visualTypeToDataRoles = [
    { name: "columnChart", displayName: "Column chart", dataRoles: ["Axis", "Values", "Tooltips"], dataRoleNames: ["Category", "Y", "Tooltips"] },
    { name: "areaChart", displayName: "Area chart", dataRoles: ["Axis", "Legend", "Values"], dataRoleNames: ["Category", "Series", "Y"] },
    { name: "barChart", displayName: "Bar chart", dataRoles: ["Axis", "Values", "Tooltips"], dataRoleNames: ["Category", "Y", "Tooltips"] },
    { name: "pieChart", displayName: "Pie chart", dataRoles: ["Legend", "Values", "Tooltips"], dataRoleNames: ["Category", "Y", "Tooltips"] },
    { name: "lineChart", displayName: "Line chart", dataRoles: ["Axis", "Legend", "Values"], dataRoleNames: ["Category", "Series", "Y"] },
];

// Define the available fields for each data role
const dataRolesToFields = [
    { dataRole: "Axis", Fields: ["Industry", "Opportunity Status", "Lead Rating", "Salesperson"] },
    { dataRole: "Values", Fields: ["Actual Revenue", "Estimated Revenue", "Number of Opportunities", "Salesperson"] },
    { dataRole: "Legend", Fields: ["Industry", "Lead Rating", "Opportunity Status", "Salesperson"] },
    { dataRole: "Tooltips", Fields: ["Industry", "Actual Close Date", "Actual Revenue", "Estimated Revenue"] },
];

// Define schemas for visuals API
const schemas = {
    column: "http://powerbi.com/product/schema#column",
    measure: "http://powerbi.com/product/schema#measure",
    property: "http://powerbi.com/product/schema#property",
    default: "http://powerbi.com/product/schema#default",
};

// Define mapping from fields to target table and column/measure
const dataFieldsTargets = {
    ActualRevenue: { column: "Actual Revenue", table: "QVC_report", schema: schemas.column },
    NumberofOpportunities: { measure: "Number of Opportunities", table: "QVC_report", schema: schemas.measure },
    Salesperson: { column: "Salesperson", table: "QVC_report", schema: schemas.column },
    EstimatedRevenue: { column: "Estimated Revenue", table: "QVC_report", schema: schemas.column },
    OpportunityStatus: { column: "Opportunity Status", table: "QVC_report", schema: schemas.column },
    Industry: { column: "Industry", table: "QVC_report", schema: schemas.column },
    LeadRating: { column: "Lead Rating", table: "QVC_report", schema: schemas.column },
    Salesperson2: { column: "Salesperson2", table: "QVC_report", schema: schemas.column },
    ActualCloseDate: { column: "Actual Close Date", table: "QVC_report", schema: schemas.column },
};

const dataFieldsMappings = {
    ActualRevenue: "Actual Revenue",
    NumberofOpportunities: "Number of Opportunities",
    Salesperson: "Salesperson",
    EstimatedRevenue: "Estimated Revenue",
    OpportunityStatus: "Opportunity Status",
    Industry: "Industry",
    LeadRating: "Lead Rating",
    Salesperson2: "Salesperson2",
    ActualCloseDate: "Actual Close Date"
}

// Define the available properties
const showcaseProperties = ["legend", "xAxis", "yAxis"];

// Define title related properties
const titleProperties = ["title", "titleText", "titleAlign"];

const visualTypeProperties = {
    columnChart: ["xAxis", "yAxis"],
    areaChart: ["legend", "xAxis", "yAxis"],
    barChart: ["xAxis", "yAxis"],
    pieChart: ["legend"],
    lineChart: ["legend", "xAxis", "yAxis"]
};