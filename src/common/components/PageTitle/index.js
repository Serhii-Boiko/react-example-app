import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const PageTitle  = ({title}) => (
    <Breadcrumb>
        <BreadcrumbItem active>{title}</BreadcrumbItem>
    </Breadcrumb>
);

export default PageTitle;
