const t=JSON.parse('{"key":"v-531a8958","path":"/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/%E7%BD%91%E7%BB%9C/macof.html","title":"macof","lang":"zh-CN","frontmatter":{"description":"macof macof是dsniff中的一个小工具 概要：交换机中存在着一个记录着MAC地址的表，为了完成数据的快速转发，这个表有着自动学习机制，学习后可以直接向目标发送数据。利用这不断学习的机制，不断地发送MAC地址交给交换机，填满整个MAC表，此时交换机就只能数据广播的形式获取信息，就像是集线器一样。攻击者使用抓包工具, 即可获得广播的数据. macof 用于对交换机进行mac地址表溢出。内部mac表都是有大小的，一般8k左右，一但mac表满了，其他mac地址就加不进来。macof，用来发送大量伪造的mac地址的数据包。可达到溢出的目的。阻断内网服务器正常网络通信，一般情况下，mac地址的欺骗和arp的欺骗组合使用，共同欺骗交换机和PC，增加欺骗成功率。","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80/%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/%E7%BD%91%E7%BB%9C/macof.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"macof"}],["meta",{"property":"og:description","content":"macof macof是dsniff中的一个小工具 概要：交换机中存在着一个记录着MAC地址的表，为了完成数据的快速转发，这个表有着自动学习机制，学习后可以直接向目标发送数据。利用这不断学习的机制，不断地发送MAC地址交给交换机，填满整个MAC表，此时交换机就只能数据广播的形式获取信息，就像是集线器一样。攻击者使用抓包工具, 即可获得广播的数据. macof 用于对交换机进行mac地址表溢出。内部mac表都是有大小的，一般8k左右，一但mac表满了，其他mac地址就加不进来。macof，用来发送大量伪造的mac地址的数据包。可达到溢出的目的。阻断内网服务器正常网络通信，一般情况下，mac地址的欺骗和arp的欺骗组合使用，共同欺骗交换机和PC，增加欺骗成功率。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T13:15:02.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-28T13:15:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"macof\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-28T13:15:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[]}],"git":{"createdTime":1701177302000,"updatedTime":1701177302000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.24,"words":371},"filePathRelative":"编程语言/通用知识/网络/macof.md","localizedDate":"2023年11月28日","excerpt":"<h1> macof</h1>\\n<p>macof是dsniff中的一个小工具\\n概要：交换机中存在着一个记录着MAC地址的表，为了完成数据的快速转发，这个表有着自动学习机制，学习后可以直接向目标发送数据。利用这不断学习的机制，不断地发送MAC地址交给交换机，填满整个MAC表，此时交换机就只能数据广播的形式获取信息，就像是集线器一样。攻击者使用抓包工具, 即可获得广播的数据.\\nmacof 用于对交换机进行mac地址表溢出。内部mac表都是有大小的，一般8k左右，一但mac表满了，其他mac地址就加不进来。macof，用来发送大量伪造的mac地址的数据包。可达到溢出的目的。阻断内网服务器正常网络通信，一般情况下，mac地址的欺骗和arp的欺骗组合使用，共同欺骗交换机和PC，增加欺骗成功率。</p>","copyright":{"author":"王新宇"},"autoDesc":true}');export{t as data};
