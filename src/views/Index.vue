<template>
    <div>
        <Nav/>
        <router-view/>
    </div>
</template>
<script>

import Nav from '@/components/layout/Nav'
export default {
   name:'Index',
   components: {
       Nav
   }
}
</script>
